import { fetcher } from '@/lib/coingecko.actions'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const TrendingCoins = async() => {
  let trendingCoins: { coins: TrendingCoin[] }

  try {
    trendingCoins = await fetcher<{ coins: TrendingCoin[] }>("search/trending", undefined, 300)
  } catch (error) {
    console.error("Failed to fetch trending coins:", error)

    return <div id="trending-coins">Unable to load trending coins.</div>
  }

  return (
    <div id="trending-coins">
      <h4>Trending Coins</h4>

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
            {trendingCoins?.coins?.map((coin) => (
              <TableRow key={coin.item.symbol}>
                <TableCell className="font-medium">{coin.item.name}</TableCell>
                <TableCell>{coin.item.symbol}</TableCell>
                <TableCell>{coin.item.data.price}</TableCell>
                <TableCell className="text-right">{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>
  )
}

export default TrendingCoins
