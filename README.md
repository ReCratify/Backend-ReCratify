<center>

# ReCratify Backend API

</center>

This is the documentation of The ReCratify Backend API. It is a part of the Capstone Project "ReCratify" by C241-PS077 Bangkit Academy 2024 Batch 1.

```markdown
# Prerequisites

Before running the application, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (JavaScript Runtime Environment)
- [npm](https://www.npmjs.com/) (Node Package Manager)

# Tech We Use in Capstone Project

- Hapi.js (Node.js Framework)
- MySQL (DBMS)
- Sequelize (Object Relational Mapper)
- nanoid (Unique ID Generator)
- bcrypt (Password Hashing)
- multer (multipart/form-data)
- jsonwebtoken (JWT Token)
- nodemailer (Email Services)
- Sequelize (Object Relational Mapper)
- Cloud Run (Deployment)
- Cloud SQL (Database)
- Cloud Storage (Image Storage)
```

## Getting Started

To run the API on your local computer, follow these steps:

1.  Clone this repository
    ```bash
    git clone https://github.com/lintangbhanu/Backend-ReCratify.git
    ```
2.  Install the required dependencies
    ```bash
     npm install
    ```
3.  To run this project, you will need to add the following environment variables to your .env file

    ```bash
    #Database Configuration Mysql
    DB_HOST=localhost
    DB_USERNAME=root
    DB_PASSWORD=
    DB_NAME=Change this to your own database name!
    DB_PORT=3306

    #Email Service Configuration
    APP_USER=example@gmail.com
    APP_PASS=xxxx xxxx xxxx xxxx

    #JWT TOKEN
    JWT_SECRET=change this your own random token key!
    ```

4.  create your own database like this

    <a href="">
      <img src="https://drive.google.com/uc?id=1HD0vQtUV1oGvKQ7NVyN063ZxqI8BdW3y" />
    </a>

    <details>
    <summary>Databse Exported File</summary>
    You can use exported file for your database. You can download the exported file <a href="https://drive.google.com/uc?export=download&id=1CLu3uy8VBCzewzWjKV1OjT7StjRDzmBn">HERE</a>
    </details>

5.  Start the server

    ```bash
    npm start
    ```

6.  The API will be running on http://localhost:3000.
7.  [You can test the API using Postman or any other API testing tool.](#endpoints)

## Endpoints

If you want to test the API, you can use the following endpoints

OR

You can use Postman to test the API. You can download the Postman documentation <a href="https://documenter.getpostman.com/view/30953372/2sA3XMjP7s">HERE</a>

<details>
<summary>User Auth</summary>

- **Register**
  <pre>POST /register</pre>

  Request Body:

  ```json
  {
    "username": "yourname",
    "email": "yourname@example.com",
    "password": "password"
  }
  ```

  Response Body:

  ```json
  {
    "status": "success",
    "message": "Registration successful!"
  }
  ```

- **Login**
  <pre>POST /login</pre>

  Request Body:

  ```json
  {
    "email": "yourname@example.com",
    "password": "password"
  }
  ```

  Response Body:

  ```json
  {
    "error": false,
    "message": "Login berhasil",
    "loginResult": {
      "userId": "fJ_CD4OXvhD",
      "username": "yourname",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZKX0NENE9YdmhEIiwiZW1haWwiOiJ5b3VybmFtZUBleGFtcGxlLmNvbSIsImlhdCI6MTcxODAzMTg4NywiZXhwIjoxNzE4MTE4Mjg3fQ.dbqsLVD8Q0s45JfbghOwCAOckNmQfOnB00txjtJMvqA"
    }
  }
  ```

- **Logout**
  <pre>POST /logout</pre>
  <pre>Authorization: Token</pre>

  Response Body:

  ```json
  {
    "status": "success",
    "message": "Logout successful"
  }
  ```

</details>

<details>
<summary>User</summary>

- **Forgot Password**
  <pre>POST /forgotpassword</pre>

  Request Body:

  ```json
  {
    "email": "yourname@example.com"
  }
  ```

  Response Body:

  ```json
  {
    "status": "success",
    "message": "A reset code has been sent to your email."
  }
  ```

- **Verify Code**
  <pre>POST /verifycode</pre>

  Request Body:

  ```json
  {
    "email": "yourname@example.com",
    "resetCode": "123456"
  }
  ```

  Response Body:

  ```json
  {
    "status": "success",
    "message": "Reset code valid"
  }
  ```

- **Reset Password**
  <pre>POST /resetpassword</pre>

  Request Body:

  ```json
  {
    "email": "yourname@example.com",
    "newPassword": "bhanu123",
    "resetCode": "123456"
  }
  ```

  Response Body:

  ```json
  {
    "status": "success",
    "message": "Password reset was successful"
  }
  ```

- **Change Password**
  <pre>POST /changepassword</pre>
  <pre>Authorization: Token</pre>

  Request Body:

  ```json
  {
    "oldPassword": "oldPassword",
    "newPassword": "newPassword",
    "confirmPassword": "newPassword"
  }
  ```

  Response Body:

  ```json
  {
    "status": "success",
    "message": "Password changed successfully"
  }
  ```

</details>

<details>
<summary>Youtube Craft</summary>

- **Get Craft Video**
  <pre>POST /allvideos/{{waste}}</pre>
  <pre>Authorization: Token</pre>

  Response Body:

  ```json
  {
    "status": "success",
    "label": "plastic-bag",
    "videos": [
      {
        "Youtube_ID": "4r9tLvMVIKM",
        "Title": "Turning Plastic Trash Into Luxury Bags | One Small Step",
        "URL_Thumbnail": "https://img.youtube.com/vi/4r9tLvMVIKM/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=4r9tLvMVIKM"
      },
      {
        "Youtube_ID": "5JNe-hce0sY",
        "Title": "How To Make Plastic Bag Sleeping Mats (Where You Live)",
        "URL_Thumbnail": "https://img.youtube.com/vi/5JNe-hce0sY/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=5JNe-hce0sY"
      },
      {
        "Youtube_ID": "fLEkneZS6-0",
        "Title": "Flowers Making With Plastic Carry Bags | DIY | Carry Bags Re Use Ideas | Best Out Of Waste",
        "URL_Thumbnail": "https://img.youtube.com/vi/fLEkneZS6-0/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=fLEkneZS6-0"
      },
      {
        "Youtube_ID": "iOIP_qXNsoU",
        "Title": "26 ORIGINAL WAYS TO USE PLASTIC BAGS",
        "URL_Thumbnail": "https://img.youtube.com/vi/iOIP_qXNsoU/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=iOIP_qXNsoU"
      },
      {
        "Youtube_ID": "j-7grMXIXs0",
        "Title": "Beginners' Guide to Plastic Bag Recycling - How to Make a Wallet",
        "URL_Thumbnail": "https://img.youtube.com/vi/j-7grMXIXs0/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=j-7grMXIXs0"
      },
      {
        "Youtube_ID": "lTT2utfcHF0",
        "Title": "BESI tas belanja Plastik, Anda tidak akan percaya dengan hasil yang luar biasa. ide daur ulang",
        "URL_Thumbnail": "https://img.youtube.com/vi/lTT2utfcHF0/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=lTT2utfcHF0"
      },
      {
        "Youtube_ID": "qTrsFgGBwcs",
        "Title": "How to make FABRIC from PLASTIC grocery bags - Upcycling Plastic",
        "URL_Thumbnail": "https://img.youtube.com/vi/qTrsFgGBwcs/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=qTrsFgGBwcs"
      },
      {
        "Youtube_ID": "r5hehRmMfEk",
        "Title": "15 AWESOME DIY CRAFTS WITH PLASTIC BAGS",
        "URL_Thumbnail": "https://img.youtube.com/vi/r5hehRmMfEk/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=r5hehRmMfEk"
      },
      {
        "Youtube_ID": "w-Ud0SzgFHc",
        "Title": "18 PLASTIC BAG HACKS AND IDEAS",
        "URL_Thumbnail": "https://img.youtube.com/vi/w-Ud0SzgFHc/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=w-Ud0SzgFHc"
      },
      {
        "Youtube_ID": "y6-uY-w1lVI",
        "Title": "DIY Basket Bag from Plastic | Upcycling Crafts for Eco-Friendly Handmade Bags",
        "URL_Thumbnail": "https://img.youtube.com/vi/y6-uY-w1lVI/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=y6-uY-w1lVI"
      }
    ]
  }
  ```

- **Get Detail Video**
  <pre>POST /detailvideos/{{postId}}</pre>
  <pre>Authorization: Token</pre>

  Response Body:

  ```json
  {
    "status": "success",
    "Video": {
      "Youtube_ID": "HBXjr982vDI",
      "label": "Plastic-Bottle",
      "Title": "Ide Kreatif Membuat Bunga dari Botol Bekas",
      "URL_Thumbnail": "https://img.youtube.com/vi/HBXjr982vDI/hqdefault.jpg",
      "URL_Video": "https://www.youtube.com/watch?v=HBXjr982vDI"
    }
  }
  ```

- **Add Favorite**
  <pre>POST /favorites</pre>
  <pre>Authorization: Token</pre>

  Request Body:

  ```json
  {
    "label": "plastic-bottle",
    "Youtube_ID": "iCDFDW_VCa8"
  }
  ```

  Response Body:

  ```json
  {
    "status": "success",
    "message": "Video successfully added to favorites list!"
  }
  ```

- **Get User Favorite**
  <pre>GET /favorites</pre>
  <pre>Authorization: Token</pre>

  Response Body:

  ```json
  {
    "status": "success",
    "userId": "fJ_CD4OXvhD",
    "favorites": [
      {
        "Youtube_ID": "iCDFDW_VCa8",
        "label": "Plastic-Bottle",
        "Title": "From Plastic Bottle to Plane | Kreasi dari botol bekas",
        "URL_Thumbnail": "https://img.youtube.com/vi/iCDFDW_VCa8/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=iCDFDW_VCa8"
      },
      {
        "Youtube_ID": "5JNe-hce0sY",
        "Title": "How To Make Plastic Bag Sleeping Mats (Where You Live)",
        "URL_Thumbnail": "https://img.youtube.com/vi/5JNe-hce0sY/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=5JNe-hce0sY"
      }
    ]
  }
  ```

- **Delete Favorite**
  <pre>DELETE /favorites</pre>
  <pre>Authorization: Token</pre>

  Request Body:

  ```json
  {
    "Youtube_ID": "iCDFDW_VCa8"
  }
  ```

  Response Body:

  ```json
  {
    "status": "success",
    "message": "Favorite video successfully removed!"
  }
  ```

</details>

<details>
<summary>Publish</summary>

- **Upload Craft**
  <pre>POST /upload</pre>
  <pre>Authorization: Token</pre>
  <pre>Content-Type: multipart/form-data</pre>

  Request Body:

  ```json
  {
    "title": "Vas Bunga Botol Kaca",
    "description": "Caranya adalah.......",
    "file": "VasBotolKaca.jpg"
  }
  ```

  Response Body:

  ```json
  {
    "message": "File uploaded successfully",
    "data": {
      "postId": "v7nrQccpwx0",
      "userId": "fJ_CD4OXvhD",
      "title": "Vas Bunga Botol Kaca",
      "URL_Image": "https://storage.googleapis.com/yourBucket/VasBotolKaca.jpg",
      "description": "Caranya adalah......."
    }
  }
  ```

- **Get All Post**
  <pre>GET /allpost</pre>
  <pre>Authorization: Token</pre>

  Response Body:

  ```json
  {
    "status": "success",
    "message": "Successfully retrieved all post data!",
    "data": [
      {
        "postId": "v7nrQccpwx0",
        "userId": "fJ_CD4OXvhD",
        "username": "yourname",
        "title": "Vas Bunga Botol Kaca",
        "URL_Image": "https://storage.googleapis.com/yourBucket/VasBotolKaca.jpg",
        "description": "Caranya adalah......."
      },
      {
        "postId": "Bo6pthLiP2Y",
        "userId": "HfXHKh01ccG",
        "username": "Jack Sparrow",
        "title": "Pupuk kompos dari sisa makanan",
        "URL_Image": "https://storage.googleapis.com/yourBucket/image1.jpg",
        "description": "Caranya adalah......."
      },
      {
        "postId": "lcHYIDPV48J",
        "userId": "WPL8mGNtxcV",
        "username": "Unta",
        "title": "Miniatur motor dari kaleng",
        "URL_Image": "https://storage.googleapis.com/yourBucket/image2.jpg",
        "description": "Caranya adalah......."
      }
    ]
  }
  ```

- **Get Detail Post**
  <pre>GET /detailpost/{{postId}}</pre>
  <pre>Authorization: Token</pre>

  Response Body:

  ```json
  {
    "status": "success",
    "message": "Successfully retrieved post details",
    "data": {
      "postId": "v7nrQccpwx0",
      "userId": "fJ_CD4OXvhD",
      "username": "yourname",
      "title": "Vas Bunga Botol Kaca",
      "URL_Image": "https://storage.googleapis.com/yourBucket/VasBotolKaca.jpg",
      "description": "Caranya adalah......."
    }
  }
  ```

- **Get User Post**
  <pre>GET /userpost</pre>
  <pre>Authorization: Token</pre>

  Response Body:

  ```json
  {
    "status": "success",
    "message": "Successfully retrieved craft posts by user: yourname!",
    "userId": "fJ_CD4OXvhD",
    "totalPosts": 3,
    "data": [
      {
        "postId": "v7nrQccpwx0",
        "title": "Vas Bunga Botol Kaca",
        "URL_Image": "https://storage.googleapis.com/yourBucket/VasBotolKaca.jpg",
        "description": "Caranya adalah.......",
        "createdAt": "2024-06-09T23:18:15.000Z"
      },
      {
        "postId": "v7nrQwikln1",
        "title": "TES FIKSSS",
        "URL_Image": "https://storage.googleapis.com/yourBucket/VasBotolKaca.jpg",
        "description": "Caranya adalah.......",
        "createdAt": "2024-06-09T23:18:15.000Z"
      },
      {
        "postId": "vwh7do8OC2l",
        "title": "Vas Bunga Botol Kaca",
        "URL_Image": "https://storage.googleapis.com/yourBucket/VasBotolKaca.jpg",
        "description": "Caranya adalah.......",
        "createdAt": "2024-06-09T23:15:45.000Z"
      }
    ]
  }
  ```

- **Delete Post**
  <pre>DELETE /deletepost</pre>
  <pre>Authorization: Token</pre>

  Request Body:

  ```json
  {
    "postId": "6L-mKuuFILv",
    "URL_Image": "https://storage.googleapis.com/craft-storage-recratify/1717974662941_f54eb8a70d58c1c8dbce0a8f739292cb.jpg"
  }
  ```

  Response Body:

  ```json
  {
    "status": "success",
    "message": "Craft Post deleted successfully!"
  }
  ```

</details>

## Architecture

<a href="">
    <img src="https://drive.google.com/uc?id=1ReibUOEGvH34JE5rmbEuW_cLtGv6kwkH"/>
 </a>
