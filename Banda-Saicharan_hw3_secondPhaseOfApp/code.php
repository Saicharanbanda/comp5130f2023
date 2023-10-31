
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
        if (isset($_POST["name"])) {
            
            $name = $_POST["name"];
            
            echo "Received data from the first form - Name: $name";
        } elseif (isset($_POST["familyInfo"])) {
            
            $familyInfo = $_POST["familyInfo"];
            $favoriteFamilyMember = $_POST["favoriteFamilyMember"];
            $likeReason = $_POST["likeReason"];
            $funFact = $_POST["funFact"];
            
            echo "Received data from the second form - Family Info: $familyInfo";
        } elseif (isset($_POST["hobbies"])) {
            
            $hobbies = $_POST["hobbies"];

            
            $photo = $_FILES["photo"];
            $resume = $_FILES["resume"];

            
            $uploadDirectory = "uploads/";

            
            if (!file_exists($uploadDirectory)) {
                mkdir($uploadDirectory, 0777, true);
            }

            
            $photoPath = $uploadDirectory . basename($photo["name"]);
            $resumePath = $uploadDirectory . basename($resume["name"]);

            if (move_uploaded_file($photo["tmp_name"], $photoPath) && move_uploaded_file($resume["tmp_name"], $resumePath)) {
                echo "Received data from the third form - Hobbies: $hobbies<br>";
                echo "Uploaded photo to: $photoPath<br>";
                echo "Uploaded resume to: $resumePath";
            } else {
                echo "Error uploading files.";
            }
        }
    }
    ?>
