'use client'

import SpaceJumpGame from '@/components/SpaceJumpGame'
import { useFrame } from '@/components/farcaster-provider'
import { SafeAreaContainer } from '@/components/safe-area-container'
import { WagmiProvider } from 'wagmi'
import { config } from '@/components/wallet-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Demo } from '../Home'

export default function Home() {
  const { context, isLoading, isSDKLoaded } = useFrame()
  const queryClient = useMemo(() => new QueryClient(), [])

  if (isLoading) {
    return (
      <SafeAreaContainer insets={context?.client.safeAreaInsets}>
        <div className="flex min-h-screen flex-col items-center justify-center p-4 space-y-8">
          <div className="relative">
            {/* Centered icon with scaling animation */}
            <div className="w-32 h-32 flex items-center justify-center">
             <h1>Loading</h1>
            </div>
          </div>
        
        </div>
      </SafeAreaContainer>
    )
  }

  if (!isSDKLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
        </div>

        {/* Stars background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-lg w-full text-center space-y-8 px-6">
          {/* Game Icon/Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <span className="text-4xl">🚀</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Chain Jump
            </h1>
            <p className="text-xl text-gray-300 font-medium">
              🌟 Space Adventure Awaits
            </p>
            <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed">
              Jump through space platforms, collect coins, and reach for the stars in this thrilling endless adventure!
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-3 my-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <span className="text-cyan-400">🎮</span>
              <span>Endless vertical scrolling gameplay</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <span className="text-yellow-400">💰</span>
              <span>Collect coins and power-ups</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <span className="text-purple-400">🏆</span>
              <span>Compete for high scores</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-center space-x-2 text-cyan-400 mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 256 256">
                  <rect width="256" height="256" rx="56" fill="#7C65C1"></rect>
                  <path d="M183.296 71.68H211.968L207.872 94.208H200.704V180.224L201.02 180.232C204.266 180.396 206.848 183.081 206.848 186.368V191.488L207.164 191.496C210.41 191.66 212.992 194.345 212.992 197.632V202.752H155.648V197.632C155.648 194.345 158.229 191.66 161.476 191.496L161.792 191.488V186.368C161.792 183.081 164.373 180.396 167.62 180.232L167.936 180.224V138.24C167.936 116.184 150.056 98.304 128 98.304C105.944 98.304 88.0638 116.184 88.0638 138.24V180.224L88.3798 180.232C91.6262 180.396 94.2078 183.081 94.2078 186.368V191.488L94.5238 191.496C97.7702 191.66 100.352 194.345 100.352 197.632V202.752H43.0078V197.632C43.0078 194.345 45.5894 191.66 48.8358 191.496L49.1518 191.488V186.368C49.1518 183.081 51.7334 180.396 54.9798 180.232L55.2958 180.224V94.208H48.1278L44.0318 71.68H72.7038V54.272H183.296V71.68Z" fill="white"></path>
                </svg>
                <span className="font-semibold">Play on Farcaster</span>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                This game is designed as a Farcaster Mini App. Open it in Farcaster to enjoy the full experience with Web3 features!
              </p>
              
              <button 
                onClick={() => {
                  window.open('https://warpcast.com/', '_blank')
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 256 256">
                  <rect width="256" height="256" rx="56" fill="currentColor"></rect>
                  <path d="M183.296 71.68H211.968L207.872 94.208H200.704V180.224L201.02 180.232C204.266 180.396 206.848 183.081 206.848 186.368V191.488L207.164 191.496C210.41 191.66 212.992 194.345 212.992 197.632V202.752H155.648V197.632C155.648 194.345 158.229 191.66 161.476 191.496L161.792 191.488V186.368C161.792 183.081 164.373 180.396 167.62 180.232L167.936 180.224V138.24C167.936 116.184 150.056 98.304 128 98.304C105.944 98.304 88.0638 116.184 88.0638 138.24V180.224L88.3798 180.232C91.6262 180.396 94.2078 183.081 94.2078 186.368V191.488L94.5238 191.496C97.7702 191.66 100.352 194.345 100.352 197.632V202.752H43.0078V197.632C43.0078 194.345 45.5894 191.66 48.8358 191.496L49.1518 191.488V186.368C49.1518 183.081 51.7334 180.396 54.9798 180.232L55.2958 180.224V94.208H48.1278L44.0318 71.68H72.7038V54.272H183.296V71.68Z" fill="white"></path>
                </svg>
                <span>Open in Farcaster</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>

            {/* Alternative options */}
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                New to Farcaster?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="https://www.farcaster.xyz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 bg-cyan-500/10 hover:bg-cyan-500/20 px-4 py-2 rounded-lg border border-cyan-500/20"
                >
                  <span>Learn about Farcaster</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href="https://warpcast.com/~/invite-page" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 bg-purple-500/10 hover:bg-purple-500/20 px-4 py-2 rounded-lg border border-purple-500/20"
                >
                  <span>Get Warpcast App</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <SafeAreaContainer insets={context?.client.safeAreaInsets}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Demo />
        </QueryClientProvider>
      </WagmiProvider>
    </SafeAreaContainer>
  )
}
