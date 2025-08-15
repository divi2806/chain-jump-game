'use client'

import { useEffect, useRef } from 'react'
import styles from './SpaceJumpGame.module.css'

export default function SpaceJumpGame() {
  const gameInitialized = useRef(false)

  useEffect(() => {
    if (gameInitialized.current) return
    gameInitialized.current = true

    // Load the game engine script
    const script = document.createElement('script')
    script.src = '/game-engine.js'
    script.onload = () => {
      // Initialize the game when script is loaded
      new (window as any).SpaceJumpGameClass()
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="/game-engine.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div id="gameContainer" className={styles.gameContainer}>
      <canvas id="gameCanvas" className={styles.gameCanvas}></canvas>
      
      <div id="ui" className={styles.ui}>
        <div id="score" className={styles.score}>0</div>
        
        <div id="controls" className={styles.controls}>
          <div className={`${styles.controlBtn} ${styles.leftBtn}`} id="leftBtn"></div>
          <div className={`${styles.controlBtn} ${styles.rightBtn}`} id="rightBtn"></div>
        </div>
        
        <div id="gameOver" className={styles.gameOver}>
          <h2>Game Over!</h2>
          <p>Your Score: <span id="finalScore">0</span></p>
          <div className={styles.gameOverButtons}>
            <button id="playBtn" className={styles.actionBtn}>Play Again</button>
            <button id="topScorerBtn" className={styles.actionBtn}>Top Scorer</button>
            <button id="exitBtn" className={styles.actionBtn}>Exit</button>
          </div>
        </div>
        
        <div id="startScreen" className={styles.startScreen}>
          <h1>🚀 Space Jump</h1>
          <p>Jump on platforms and reach for the stars! Use the arrow buttons to move left and right.</p>
          <div className={styles.startButtons}>
            <button id="startPlayBtn" className={styles.startBtn}>Start Game</button>
            <button id="startLeaderboardBtn" className={styles.startBtn}>Top Scorer</button>
            <button id="startExitBtn" className={styles.startBtn}>Exit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
