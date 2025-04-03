import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfileDetailPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/profile">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">김블록 연구원</h1>
          <p className="text-muted-foreground">프로필 상세 정보</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-48 w-48 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=192&width=192"
                    alt="김블록 연구원 프로필 사진"
                    width={192}
                    height={192}
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold">김블록 연구원</h2>
                  <p className="text-sm text-muted-foreground">암호화폐 투자 전략 연구</p>
                </div>
                <div className="w-full">
                  <Link href="/apply">
                    <Button className="w-full">공동연구 신청</Button>
                  </Link>
                </div>
                <div className="w-full">
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    CV 다운로드
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>연락처 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">이메일</h3>
                <p>block@crypto.research.kr</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">전화번호</h3>
                <p>010-1234-5678</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">연구실</h3>
                <p>디지털경제연구소 B401</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">웹사이트</h3>
                <a href="#" className="flex items-center text-blue-600 hover:underline">
                  crypto-research.kr
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Tabs defaultValue="about">
            <TabsList>
              <TabsTrigger value="about">소개</TabsTrigger>
              <TabsTrigger value="research">연구</TabsTrigger>
              <TabsTrigger value="publications">출판물</TabsTrigger>
              <TabsTrigger value="education">학력</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>연구자 소개</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    서울대학교 경제학과를 졸업하고 미국 스탠포드 대학교에서 금융공학 석사 학위를 취득했습니다.
                    월스트리트에서 5년간 퀀트 애널리스트로 근무한 경험이 있으며, 2018년부터 암호화폐 시장 연구를
                    시작했습니다. 현재는 디지털경제연구소에서 암호화폐 투자 전략을 연구하고 있습니다.
                  </p>
                  <p>
                    주요 연구 관심사는 암호화폐 시장의 가격 예측 모델 개발, 온체인 데이터 분석, 그리고 효율적인
                    포트폴리오 구성 전략입니다. 최근에는 머신러\

