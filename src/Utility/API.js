import axios from 'axios';

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer gdVrszsAHn5jaI5a03eA2+B9CAfPgoaeUfE+0miKH4NPnivEe1JMlNRnAUl8aBcK5KBplKQziT9PFMSWvO3slw=="
  }
};

export default {
    newUser: function (userData) {
        console.log("message", userData);
        axios.post('/create/user', userData)
            .then(function (response) {
                alert(`Hello ${response.data.username}. Click Login`);
                console.log(response);
            });
    },
    login: function (userData, setLoggedIn, setUserSince, setName, setId, push) {
        console.log("message", userData);
        axios.post('/api/login', userData)
            .then(function (response) {
                console.log(response);
                alert(`logged in as ${response.data.username}`);
                setLoggedIn(true);
                let date = response.data.createdAt;
                let formattedDate = date.slice(0, 10);
                setUserSince(formattedDate);
                setName(response.data.username);
                setId(response.data.id);
                push("/profile");
            })
            .catch(function (error) {
                alert("incorrect username or password");
                console.log("ERROR", error);
            });
    },

    logout: function (setLoggedIn) {
        axios.get("/logout")
            .then(function (response) {
                setLoggedIn(false);
                console.log("setLoggedIn to FALSE", response);
            })
    },

    getArticles: function (setArticles) {
        axios.get("/api/articles")
            .then(function (articles) {
                console.log("hopefully every article", articles);
                setArticles(articles.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    getCollegeInfo: function(CollegeState) {
      return axios.get(
        `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.state=${CollegeState}&school.degrees_awarded.predominant=3&api_key=zbj7fnK2m6tUBt900Jy7ZMvFTG1sn84xcaucbNe2&_fields=id,school.city,school.state,school.name,school.school_url,latest.student.size,latest.cost.avg_net_price.overall,latest.completion.rate_suppressed.overall,latest.earnings.10_yrs_after_entry.median,latest.aid.median_debt.completers.overall,latest.aid.median_debt.completers.monthly_payments,latest.admissions.sat_scores.25th_percentile.critical_reading,latest.admissions.sat_scores.75th_percentile.critical_reading,latest.admissions.sat_scores.25th_percentile.math,latest.admissions.sat_scores.75th_percentile.math,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.black,latest.academics.program_percentage.business_marketing,latest.cost.tuition.out_of_state,latest.cost.tuition.in_state&_per_page=10&_sort=latest.earnings.10_yrs_after_entry.median:desc`
      );
    },
    getJobMarket: function(jobCourse, jobState) {
      return axios.get(
        `https://api.careeronestop.org/v1/jobsearch/229YqegbYs9gqsG/${jobCourse}/${jobState}/25/0/DESC/0/10/60?source=NLx&showFilters=false`,
        config
      );
    }
};