let uploadFile = async () => "File Uploaded Successfully";

let updateUserProfile = () => {
    let result = uploadFile();
    console.log("Result is: "+ result );

    result.then(
        (value) => console.log("Value is: " + value)
    )
}

updateUserProfile()