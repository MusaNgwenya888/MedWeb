package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"

	firebase "firebase.google.com/go"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"google.golang.org/api/option"
)

type User struct {
	Working         string `json:"Working"`
	NextOfKinName   string `json:"NextOfKinName"`
	NextOfKinNumber string `json:"NextOfKinNumber"`
	Name            string `json:"Name"`
	IDNumber        string `json:"IDNumber"`
	Address         string `json:"Address"`
	Ward            string `json:"Ward"`
}

func main() {
	// Create a new Fiber app with custom configuration
	app := fiber.New(fiber.Config{
		// Set the maximum request size to 100MB (adjust as needed)
		BodyLimit: 100 * 1024 * 1024,
	})

	// CORS middleware
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
		AllowMethods: "GET, POST, PUT",
		AllowHeaders: "Content-Type",
	}))

	// Save new User...
	app.Post("/saveuser", func(c *fiber.Ctx) error {
		var userData User
		if err := c.BodyParser(&userData); err != nil {
			log.Printf("Failed to parse request body: %v", err)
			return c.Status(fiber.StatusBadRequest).SendString("Invalid request body")
		}

		results := saveUserHandler(userData)

		return c.SendString(results)
	})
	log.Fatal(app.Listen(":4001"))
}

func saveUserHandler(data User) string {
	// Convert the User struct to JSON string
	userJSON, err := json.Marshal(data)
	if err != nil {
		fmt.Println("Error marshaling User:", err)
	}

	// Convert the JSON byte slice to a string
	userString := string(userJSON)

	objectPath := data.Name + ".json"
	if err := saveStructToFirebaseStorage(data, objectPath); err != nil {
		log.Fatalf("Failed to save data to Firebase Storage: %v", err)
	}

	return userString
}

func saveStructToFirebaseStorage(structData User, filename string) error {
	ctx := context.Background()

	// Initialize Firebase app and Storage client
	firebaseConfig := &firebase.Config{
		// Add your Firebase project's configuration here
		StorageBucket: "music-service-8884l.appspot.com",
	}
	firebaseApp, err := firebase.NewApp(ctx, firebaseConfig, option.WithCredentialsFile("/Users/musawenkosingwenya/Desktop/Work/Side Projects/med/music-service-8884l-firebase-adminsdk-ebay8-0f3bab4175.json"))
	if err != nil {
		return err
	}

	storageClient, err := firebaseApp.Storage(ctx)
	if err != nil {
		fmt.Print("Failed connecting to firebaser storage")
		return err
	}

	storageBucket, err := storageClient.DefaultBucket()
	if err != nil {
		fmt.Print("Failed to use default bucket")
		return err
	}

	// Encode struct data to JSON
	jsonData, err := json.Marshal(structData)
	if err != nil {
		fmt.Print("Failed to Marshal")
		return err
	}

	// Upload JSON data to Firebase Storage
	object := storageBucket.Object(filename)
	writer := object.NewWriter(ctx)
	_, err = writer.Write(jsonData)
	if err != nil {
		return err
	}
	err = writer.Close()
	if err != nil {
		return err
	}

	return nil
}
