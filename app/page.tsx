import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { fetcher } from "@/lib/coingecko.actions"

const columns = [

]

const coins = [
  { name: "Bitcoin", symbol: "BTC", price: "$123", change: "+2.4%" },
  { name: "Ethereum", symbol: "ETH", price: "$45", change: "-1.2%" },
]


const page = async () => {
  const coin = await fetcher<CoinDetailsData>("coins/bitcoin", {
    dex_pair_format: "symbol"
  })

  const trendingCoins = await fetcher<{ coins: TrendingCoin[]}>("search/trending", undefined, 300)

  console.log("trendingCoins", trendingCoins)

  return (
    <main className="main-container">
      <section className="home-grid">
        <div id="coin-overview">
          <div className="header pt-2">
            <Image src={coin.image.large} alt={coin.name} width={56} height={56} />
            
            <div className="info">
              <p>{coin.name} / {coin.symbol}</p>
              <h1>${coin.market_data.current_price.usd.toFixed(2)}</h1>
            </div>
          </div>
        </div>
        <p>Trending Coins</p>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Coin</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">24h change</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {coins.map((coin) => (
              <TableRow key={coin.symbol}>
                <TableCell className="font-medium">{coin.name}</TableCell>
                <TableCell>{coin.symbol}</TableCell>
                <TableCell>{coin.price}</TableCell>
                <TableCell className="text-right">{coin.change}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </section>

      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  )
}

export default page
