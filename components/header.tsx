import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-yellow-500"
            >
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span className="text-lg font-bold">암호화폐 연구</span>
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm font-medium">
            연구 일정
          </Link>
          <Link href="/research" className="text-sm font-medium">
            연구 내용
          </Link>
          <Link href="/profile" className="text-sm font-medium">
            프로필
          </Link>
          <Link href="/apply" className="text-sm font-medium">
            <Button variant="outline">공동연구 신청</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

