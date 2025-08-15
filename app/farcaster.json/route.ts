import { NextResponse } from "next/server";
import { APP_URL } from "../../lib/constants";

export async function GET() {
  const farcasterConfig = {
    
      "accountAssociation": {
        "header": "eyJmaWQiOjExNDI1MzksInR5cGUiOiJhdXRoIiwia2V5IjoiMHgyODUyMTE3NzI2ODcyNTY0YThiZDk3M2E5OTIzOGEzOTdiMjgzMUJmIn0",
        "payload": "eyJkb21haW4iOiJodHRwczovL2NoYWluLWp1bXAtZ2FtZS12ZTFpLnZlcmNlbC5hcHAifQ",
        "signature": "NkYetaUGZWxE4O3qjrd5LPHAoz6wycG8e28MvQ9OfItgvMG6bTNpNE6bmiIUuLYIMXeK43XZefcB7r2pOz9dWhw="
      },
    
    frame: {
      name: "Space Jump ",
      version: "1",
      iconUrl: "https://i.ibb.co/GjbhL0B/logo.png",
      homeUrl: "https://chain-jump-game-ve1i.vercel.app",
      imageUrl: "https://i.ibb.co/GjbhL0B/logo.png",
      splashImageUrl: "https://i.ibb.co/GjbhL0B/logo.png",
      splashBackgroundColor: "#ffffff",
      webhookUrl: "https://chain-jump-game-ve1i.vercel.app/api/webhook",
      description: "Addictive space game to just dodge and compete",
      primaryCategory: "games",
      heroImageUrl: "https://i.ibb.co/GjbhL0B/logo.png",
      screenshotUrls: [
        "https://i.ibb.co/GjbhL0B/logo.png"
      ],
      subtitle: "Addicting space game made in 3 hours "
    }

  };

  return NextResponse.json(farcasterConfig);
}
