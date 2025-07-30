import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #18181b 0%, #23272f 100%)',
      }}
    >
      <div
        style={{
          padding: 32,
          maxWidth: 600,
          width: '100%',
          textAlign: 'center',
          borderRadius: 18,
          background: 'rgba(24,24,27,0.98)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.32)',
          animation: 'fadeIn 1.2s',
          color: '#e5e7eb',
          border: '1px solid #27272a',
        }}
      >
        {/* Animated code icon */}
        <div style={{
          fontSize: 64,
          marginBottom: 16,
          animation: 'spin 2.5s linear infinite',
          color: '#38bdf8',
          filter: 'drop-shadow(0 0 8px #0ea5e9)'
        }}>
          <span role="img" aria-label="code">💻</span>
        </div>
        <h1 style={{
          background: 'linear-gradient(90deg, #818cf8, #38bdf8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 800,
          letterSpacing: 1
        }}>
          Welcome to Code Review Project
        </h1>
        <div style={{
          margin: '24px 0',
          fontSize: 18,
          color: '#cbd5e1',
          opacity: 0.97,
          transition: 'opacity 0.8s'
        }}>
          <p>
            <b style={{ color: '#38bdf8' }}>What is this project?</b><br />
            This project is a <span style={{ color: '#818cf8', fontWeight: 600 }}>collaborative code review platform</span> that lets you submit, review, and discuss code snippets with others.
          </p>
          <p>
            <b style={{ color: '#38bdf8' }}>How does it work?</b><br />
            Upload your code, get feedback, and discuss suggestions with reviewers.<br />
            Supports <span style={{ color: '#38bdf8', fontWeight: 600 }}>multiple languages</span> and provides smart tools for efficient code analysis and discussion.
          </p>
        </div>
        <button
          onClick={() => navigate('/app')}
          style={{
            margin: 8,
            padding: '12px 32px',
            fontSize: 18,
            fontWeight: 600,
            color: '#fff',
            background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
            border: 'none',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(30,64,175,0.18)',
            cursor: 'pointer',
            transition: 'transform 0.1s, box-shadow 0.2s',
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
          onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 16px #06b6d4'}
          onMouseOut={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(30,64,175,0.18)'}
        >
          🚀 Enter App
        </button>
        {/* Keyframes for animation */}
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(-10deg);}
              50% { transform: rotate(10deg);}
              100% { transform: rotate(-10deg);}
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(30px);}
              to { opacity: 1; transform: translateY(0);}
            }
          `}
        </style>
      </div>
    </div>
  )
}
