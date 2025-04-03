import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">연구자 프로필</h1>
        <p className="text-muted-foreground">암호화폐 투자 연구자 정보</p>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="p-6">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold">김블록 연구원</h2>
                  <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                    연구원
                  </span>
                </div>
                <p className="text-muted-foreground">Kim, Block</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>010-1234-5678</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>block@crypto.research.kr</span>
                  </div>
                </div>
              </div>
              <div className="ml-auto flex items-center">
                <div className="flex items-center gap-2">
                  <span>English</span>
                  <Switch />
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-medium">소속학과</h3>
                <p>경제학과</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium">전공분야</h3>
                <p>금융공학</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium">연구실</h3>
                <p>디지털경제연구소 B401</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium">연구분야</h3>
                <p>암호화폐 투자 전략</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium">연구키워드</h3>
                <p>블록체인, 암호화폐, 투자전략</p>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="relative h-48 w-48 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=192&width=192"
                  alt="김블록 연구원 프로필 사진"
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="mb-4">
                  서울대학교 경제학과를 졸업하고 미국 스탠포드 대학교에서 금융공학 석사 학위를 취득했습니다.
                  월스트리트에서 5년간 퀀트 애널리스트로 근무한 경험이 있으며, 2018년부터 암호화폐 시장 연구를
                  시작했습니다. 현재는 디지털경제연구소에서 암호화폐 투자 전략을 연구하고 있습니다.
                </p>
                <p>
                  주요 연구 관심사는 암호화폐 시장의 가격 예측 모델 개발, 온체인 데이터 분석, 그리고 효율적인 포트폴리오
                  구성 전략입니다. 최근에는 머신러닝을 활용한 시장 심리 분석과 투자 전략 자동화에 중점을 두고 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-t">
            <Link href="/profile/detail" className="flex-1 border-r p-4 text-center hover:bg-gray-50">
              프로필 상세보기
            </Link>
            <Link href="/apply" className="flex-1 p-4 text-center hover:bg-gray-50">
              공동연구 신청
            </Link>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-4">주요 연구 성과</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "암호화폐 시장 사이클 분석",
              year: "2023",
              journal: "Journal of Digital Finance",
            },
            {
              title: "온체인 데이터를 활용한 비트코인 가격 예측 모델",
              year: "2022",
              journal: "Blockchain Research",
            },
            {
              title: "DeFi 프로젝트 평가 방법론",
              year: "2021",
              journal: "Cryptocurrency Studies",
            },
          ].map((research, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="font-medium">{research.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {research.journal}, {research.year}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

