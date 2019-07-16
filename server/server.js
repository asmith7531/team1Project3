const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(static("client/build"));
}

// app.get("/api/cards", (req, res) => {
//     console.log("helllo")
//     axios.get("https://api.data.gov/ed/collegescorecard/v1/schools.json?school.state=NJ&school.degrees_awarded.predominant=3&api_key=zbj7fnK2m6tUBt900Jy7ZMvFTG1sn84xcaucbNe2&_fields=id,school.city,school.state,school.name,school.school_url,latest.student.size,latest.cost.avg_net_price.overall,latest.completion.rate_suppressed.overall,latest.earnings.10_yrs_after_entry.median,latest.aid.median_debt.completers.overall,latest.aid.median_debt.completers.monthly_payments,latest.admissions.sat_scores.25th_percentile.critical_reading,latest.admissions.sat_scores.75th_percentile.critical_reading,latest.admissions.sat_scores.25th_percentile.math,latest.admissions.sat_scores.75th_percentile.math,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.black,latest.academics.program_percentage.business_marketing,latest.cost.tuition.out_of_state,latest.cost.tuition.in_state&_per_page=10&_sort=latest.earnings.10_yrs_after_entry.median:desc")
//         .then(function (response) {
//             res.send(response.data);
//         });
// })

app.use(routes);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//    });

// connect to Mongo DB;
// mongoose.connect(process.env.MONGODB_URI || "");

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
