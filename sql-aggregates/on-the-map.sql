select "co"."name", count("ci"."cityId") 
from "cities" as "ci"
join "countries" as "co" using ("countryId")
group by "co"."name"
