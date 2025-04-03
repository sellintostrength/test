import { CalendarIcon } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="space-y-8 py-6">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16">
          <Image
            src="/placeholder.svg?height=64&width=64"
            alt="노트북 아이콘"
            width={64}
            height={64}
            className="object-cover"
          />
          <div className="absolute -left-1 top-0 h-16 w-1 bg-yellow-500" />
        </div>
        <h1 className="text-4xl font-bold">2024 연구</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">1분기 연구 일정</h2>
          <ul className="space-y-2">
            {[
              "1월 첫째 주 2~5",
              "1월 둘째 주 8~12",
              "1월 셋째 주 15~19",
              "1월 넷째 주 22~26",
              "1월 다섯째 주 29~31",
              "2월 첫째 주 1~2",
              "2월 둘째 주 5~9",
              "2월 셋째 주 12~16",
              "2월 넷째 주 19~23",
              "2월 다섯째 주 26~29",
              "3월 첫째 주 4~8",
              "3월 둘째 주 11~15",
              "3월 셋째 주 18~22",
              "3월 넷째 주 25~29",
            ].map((week, i) => (
              <li key={i} className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-red-500" />
                <Link href={`/research/${i + 1}`} className="hover:underline">
                  {week}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">2분기 연구 일정</h2>
          <ul className="space-y-2">
            {[
              "4월 첫째 주 1~5",
              "4월 둘째 주 8~12",
              "4월 셋째 주 15~19",
              "4월 넷째 주 22~26",
              "4월 다섯째 주 29~30",
              "5월 첫째 주 1~3",
              "5월 둘째 주 6~10",
              "5월 셋째 주 13~17",
              "5월 넷째 주 20~24",
              "5월 다섯째 주 27~31",
              "6월 첫째 주 3~7",
              "6월 둘째 주 10~14",
              "6월 셋째 주 17~21",
              "6월 넷째 주 24~28",
            ].map((week, i) => (
              <li key={i} className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-red-500" />
                <Link href={`/research/${i + 15}`} className="hover:underline">
                  {week}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}