import { useRef, useState } from 'react'
import Button from './ui/Button'

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  let timerID = useRef(null)

  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
    const secs = String(totalSeconds % 60).padStart(2, '0')
    return `${hours}:${mins}:${secs}`
  }

  const StartTimer = () => {
    if (isRunning) return
    setIsRunning(true)
    timerID.current = setInterval(() => {
      setSeconds((sec) => sec + 1)
    }, 1000)
  }

  const StopTimer = () => {
    setIsRunning(false)
    clearInterval(timerID.current)
    timerID.current = null
  }

  const ResetTimer = () => {
    clearInterval(timerID.current)
    timerID.current = null
    setSeconds(0)
    setIsRunning(false)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className={`rounded-lg border-2 bg-muted/50 px-8 py-6 text-center transition-colors ${
          isRunning
            ? 'border-accent text-accent'
            : seconds > 0
              ? 'border-destructive/50 text-foreground'
              : 'border-border text-muted-foreground'
        }`}
      >
        <p className="text-5xl font-bold font-mono tracking-wider">{formatTime(seconds)}</p>
      </div>

      <div className="flex gap-3 flex-wrap justify-center">
        {!isRunning ? (
          <Button
            onClick={StartTimer}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Start
          </Button>
        ) : (
          <Button
            onClick={StopTimer}
            variant="destructive"
          >
            Stop
          </Button>
        )}
        <Button
          onClick={ResetTimer}
          variant="outline"
        >
          Reset
        </Button>
      </div>

      {seconds > 0 && (
        <p className="text-xs text-muted-foreground">
          Elapsed: {formatTime(seconds)}
        </p>
      )}
    </div>
  )
}