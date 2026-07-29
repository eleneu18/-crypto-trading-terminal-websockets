import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const columns = [
  
]

const coins = [
  { name: "Bitcoin", symbol: "BTC", price: "$123", change: "+2.4%" },
  { name: "Ethereum", symbol: "ETH", price: "$45", change: "-1.2%" },
]


const page = () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <div id="coin-overview">
          <div className="header pt-2">
            <Image src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" alt="Bitcoin" width={56} height={56} />
            
            <div className="info">
              <p>Bitcoin / BTC</p>
              <h1>$123</h1>
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
