import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler( async (req, res) => {
    console.log("error in registerUser");
    return res.status(500).json({
        message: "ok"

    }
    )
    // res.send("hello")
})


export {registerUser}