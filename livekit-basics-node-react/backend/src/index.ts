import express from "express";
import { AccessToken } from "livekit-server-sdk";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const generateToken = async (roomId: string, userId: string) => {
	const user = new AccessToken(
		process.env.LIVEKIT_API_KEY,
		process.env.LIVEKIT_API_SECRET,
		{
			identity: userId,
		}
	);

	user.addGrant({ roomJoin: true, room: roomId });

	const token = await user.toJwt();

	return token;
};

app.get("/token/:roomId/:userId", async (req, res) => {
	const { roomId, userId } = req.params;

	generateToken(roomId, userId).then((token) => res.json({ token }));
});

app.listen(3001);
