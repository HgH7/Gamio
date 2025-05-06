// src/components/TestTailwind.tsx
export default function TestTailwind() {
    return (
      <div className="bg-gray-800 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-green-400">
          Tailwind is working!
        </h1>
        <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition">
          Test Button
        </button>
      </div>
    )
  }