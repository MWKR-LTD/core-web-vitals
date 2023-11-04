export type CWV = {
  total_matches: number,
  all_good: {
      total: number,
      percentage: number
  },
  rating_percentages: {
      lcp_rating: {
          good: number,
          "needs improvement": number,
          poor: number
      },
      fid_rating: {
          good: number,
          "needs improvement": number,
          poor: number
      },
      cls_rating: {
          good: number,
          "needs improvement": number,
          poor: number
      }
  },
  vitals_averages: {
      lcp: number,
      fid: number,
      cls: number
  },
  sectors: [
      {
          id: string,
          name: string
      }
  ],
  locations: [
      {
          id: string,
          name: string
      }
  ]
}