import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart } from "lucide-react"
import Link from "next/link"

export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">암호화폐 투자 연구</h1>
        <p className="text-muted-foreground">암호화폐 시장 분석 및 투자 전략 연구</p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">개요</TabsTrigger>
          <TabsTrigger value="bitcoin">비트코인</TabsTrigger>
          <TabsTrigger value="ethereum">이더리움</TabsTrigger>
          <TabsTrigger value="altcoins">알트코인</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>연구 목적</CardTitle>
              <CardDescription>암호화폐 투자에 대한 체계적인 접근 방법 연구</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                본 연구는 암호화폐 시장의 변동성과 투자 전략에 대한 체계적인 분석을 목표로 합니다. 블록체인 기술의
                발전과 함께 암호화폐 시장은 지속적으로 성장하고 있으며, 이에 따른 투자 기회와 위험을 분석하고 효과적인
                투자 전략을 개발하는 것이 중요합니다.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">연구 방법론</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">정량적 분석</div>
                <p className="text-xs text-muted-foreground">가격 데이터, 거래량, 시장 지표 분석</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">연구 기간</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2024년 전체</div>
                <p className="text-xs text-muted-foreground">주간 및 월간 데이터 수집 및 분석</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="bitcoin" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>비트코인 분석</CardTitle>
              <CardDescription>비트코인의 가격 동향 및 투자 전략</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                비트코인은 암호화폐 시장의 기준이 되는 자산으로, 전체 시장의 방향성을 결정하는 중요한 지표입니다. 본
                연구에서는 비트코인의 가격 변동성, 시장 심리, 온체인 데이터 등을 분석하여 효과적인 투자 전략을
                개발하고자 합니다.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ethereum" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>이더리움 분석</CardTitle>
              <CardDescription>이더리움의 기술적 발전과 투자 가치</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                이더리움은 스마트 계약 기능을 제공하는 대표적인 플랫폼으로, DeFi, NFT 등 다양한 응용 분야에서 활용되고
                있습니다. 본 연구에서는 이더리움의 기술적 발전과 생태계 성장이 투자 가치에 미치는 영향을 분석합니다.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="altcoins" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>알트코인 분석</CardTitle>
              <CardDescription>주요 알트코인의 투자 가치 평가</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                비트코인과 이더리움 외의 다양한 알트코인들은 각각 고유한 기술과 사용 사례를 가지고 있습니다. 본
                연구에서는 주요 알트코인의 기술적 특징, 시장 점유율, 개발 활동 등을 종합적으로 분석하여 투자 가치를
                평가합니다.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div>
        <h2 className="text-2xl font-bold mb-4">최근 연구</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "비트코인 할빙 효과 분석",
              date: "2024-04-15",
              description: "비트코인 반감기가 가격에 미치는 영향 연구",
            },
            {
              title: "DeFi 프로젝트 투자 전략",
              date: "2024-03-22",
              description: "분산형 금융 프로젝트의 투자 가치 평가 방법론",
            },
            {
              title: "NFT 시장 동향 분석",
              date: "2024-02-18",
              description: "NFT 시장의 성장과 투자 기회 탐색",
            },
          ].map((research, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{research.title}</CardTitle>
                <CardDescription>{research.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{research.description}</p>
                <Link href={`/research/${i + 1}`} className="text-sm text-blue-600 hover:underline mt-2 inline-block">
                  자세히 보기
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

