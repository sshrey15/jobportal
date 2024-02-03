import jwt from "jsonwebtoken";

export const verifyToken = (req) => {
    const tokenExists = req.cookies._parsed.has("jwt");
    if (!tokenExists) {
        return NextResponse.json(
        { message: "error", error: "Token is not provided" },
        {
            status: 401,
        }
        );
    }
    
    const token = req.cookies._parsed.get("jwt").value;
    jwt.verify(token, process.env.JWT_SECRET);
    const decodedToken = jwt.decode(token);
    return decodedToken;
}