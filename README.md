# LazorKit Hackathon Demo

> **Hackathon Submission**: A demonstration of Passkey-native authentication and gasless transactions on Solana using the LazorKit SDK.

## 🚀 Overview

This project showcases the next generation of Solana user experience. By integrating **LazorKit**, we eliminate two of the biggest hurdles for new users:

1. **Seed Phrases**: Replaced by device-native **Passkeys** (FaceID/TouchID/Windows Hello).
2. **Gas Fees**: Sponsored by a **Paymaster** for completely gasless transactions.

### Features

- ✅ **Passkey Login**: Secure biometric authentication without seed phrases
- ✅ **Paymaster Integration**: Users pay 0 SOL for transactions
- ✅ **Wallet Dashboard**: View balance and smart wallet address
- ✅ **Send SOL**: Transfer tokens with zero gas fees

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Blockchain**: Solana (Devnet)
- **Authentication**: LazorKit Passkeys
- **Package Manager**: pnpm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20 or higher
- **pnpm** 8 or higher (install via `npm install -g pnpm`)
- A modern browser that supports **WebAuthn** (Chrome, Edge, Safari, Firefox)

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Rohan11203/Lumina.git
cd Lumina
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Set up environment variables** (if required)

Create a `.env.local` file in the root directory if you need to configure any LazorKit API keys or Solana RPC endpoints:

```env
# Add your environment variables here if needed
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com
```

4. **Run the development server**

```bash
pnpm dev
```

5. **Open the application**

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/Rohan11203/Lumina.git
cd Lumina
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📚 Documentation & Tutorials

We have prepared detailed step-by-step guides to help you understand the integration:

1. [**Creating a Passkey-Based Wallet**](docs/tutorial-1-passkey-wallet.md)  
   Learn how to install the LazorKit SDK and implement biometric login.

2. [**Sending Gasless Transactions**](docs/tutorial-2-gasless-transactions.md)  
   Learn how to configure a Paymaster and sponsor user transaction fees.

## �️ Project Structure

```
lazorkit-hackathon-demo/
├── docs/                    # Tutorial documentation
│   ├── tutorial-1-passkey-wallet.md
│   └── tutorial-2-gasless-transactions.md
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx         # Landing page with authentication
│   │   └── dashboard/       # Wallet dashboard pages
│   ├── components/          # React components
│   │   ├── auth/            # Authentication components
│   │   ├── wallet/          # Wallet features (Send, Balance)
│   │   └── Providers.tsx    # LazorKit provider wrapper
│   └── lib/                 # Utility functions and configuration
├── public/                  # Static assets (images, logos)
└── package.json             # Project dependencies
```

## �️ Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality

## 🌐 Deployment

This project can be deployed on any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Self-hosted**

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## �🏆 Hackathon Context

This project was built to demonstrate how easy it is to onboard users to Solana using LazorKit. By removing the need for browser wallet extensions and eliminating gas fees, we can create truly consumer-grade crypto applications that feel as smooth as Web2.

### Why LazorKit?

- **No Seed Phrases**: Users authenticate with biometrics they already know
- **No Gas Fees**: Paymasters sponsor transactions for seamless UX
- **No Extensions**: Pure web experience without browser plugins
- **Production Ready**: Built on proven Web standards (WebAuthn)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Rohan11203/Lumina/issues).

## 👤 Author

**Rohan**

- GitHub: [@Rohan11203](https://github.com/Rohan11203)

---

Built with ❤️ for the LazorKit Hackathon
