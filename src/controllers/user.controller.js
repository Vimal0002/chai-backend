import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req, res) => {
    // console.log("error in registerUser");
    return res.status(500).json({
        message: "ok"

    }
    )
    const {fullName, email, username, password } = req.body
    console.log("email:", email);

    if (
        [fullName, email, username, password].some ((field) =>
        field?.trim() === "")
    ) {
        throw new ApiError(400, "All field are required")
    }

    const existedUser = User.findOne({
        $or:  [{username}, {email}]
    })
    
    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists ")
    }

    const avatarLocalPath = req.files?.avtar[0]?.path;
    const coverImagePath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath) {
        throw new ApiError(400, "Avatar is require")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Avatar is require")
    }
    
    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.tolowercase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

})
 

export {registerUser}