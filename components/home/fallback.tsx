import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const TRENDING_COIN_SKELETON_ROWS = 7

export function CoinOverviewFallback() {
  return (
    <div id="coin-overview-fallback" aria-hidden="true">
      <div className="header pt-2">
        <div className="skeleton header-image" />

        <div className="info">
          <div className="skeleton header-line-sm" />
          <div className="skeleton header-line-lg" />
        </div>
      </div>

      <div className="mb-2 flex gap-2">
        {Array.from({ length: 5 }, (_, index) => (
          <div className="skeleton period-button-skeleton" key={index} />
        ))}
      </div>

      <div className="chart">
        <div className="skeleton chart-skeleton" />
      </div>
    </div>
  )
}

export function TrendingCoinsFallback() {
  return (
    <div id="trending-coins-fallback" aria-hidden="true">
      <h4>Trending Coins</h4>

      <Table className="trending-coins-table">
        <TableHeader>
          <TableRow>
            <TableHead>Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">24h change</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: TRENDING_COIN_SKELETON_ROWS }, (_, index) => (
            <TableRow key={index}>
              <TableCell className="name-cell">
                <div className="name-link">
                  <div className="skeleton name-image" />
                  <div className="skeleton name-line" />
                </div>
              </TableCell>
              <TableCell>
                <div className="skeleton change-line" />
              </TableCell>
              <TableCell className="price-cell">
                <div className="skeleton price-line" />
              </TableCell>
              <TableCell className="change-cell">
                <div className="price-change justify-end">
                  <div className="skeleton change-icon" />
                  <div className="skeleton change-line" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
