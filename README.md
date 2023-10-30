# munkres_solver

![Google LMFS: Routes Preferred ComputeRouteMatrix API](https://blog.afi.io/content/images/2023/10/Screen-Shot-2023-10-06-at-12.19.09-AM.png "Google LMFS: Routes Preferred ComputeRouteMatrix API")

Taken from: 
- [Google Mobility: An introduction to Google ODRD, LMFS and Cloud Fleet Routing APIs (part 1 of 5)](https://www.afi.io/blog/google-mobility-an-introduction-to-google-odrd-lmfs-and-cloud-fleet-routing-apis/)
- [Google ODRD: Routes Preferred ComputeRoutes API (part 2 of 5)](https://afi.io/blog/google-odrd-routes-preferred-computeroutes-api/)
- [Google LMFS: Routes Preferred ComputeRouteMatrix API (part 3 of 5)](https://www.afi.io/blog/google-lmfs-routes-preferred-computeroutematrix-api/)
- [Google Cloud Fleet Routing: OptimizeTours API (part 4 of 5)](https://afi.io/blog/google-cloud-fleet-routing-optimizetours-api/)
- Google ODRD: Navigation SDK (coming soon)

In the context of taxi dispatch, the assignment problem aims to pair available taxis (referred to as agents) with an equal number of customers (referred to as tasks) who want to be picked up promptly. This project guides you through the process of solving this problem using the [munkres-js](https://github.com/addaleax/munkres-js) library. The solution relies on a cost matrix provided by the [Google Maps Routes Preferred ComputeRouteMatrix API](https://developers.google.com/maps/documentation/routes_preferred/reference/rest/v1/TopLevel/computeRouteMatrix).

```js
const pairings = [
    ["blue - c1", "blue - c2", "blue - c3"],
    ["purple - c1", "purple - c2", "purple - c3"],
    ["green - c1", "green - c2", "green - c3"]
];

const costMatrix = [
    [843, 1933, 623],
    [1150, 2288, 572],
    [699, 982, 1363]
];

const result = munkres(costMatrix);
```

 How to run the app:
 1. cd into your project and install `munkres-js` by running `npm install munkres-js`
 2. Run `node taxi_dispatch_solver.js`

Please contact afian@afi.io if you have any questions or suggestions. Pull requests are welcome.
