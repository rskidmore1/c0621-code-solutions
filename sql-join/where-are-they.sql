select "a"."line1", 
       "a"."cityId", 
       "a"."district", 
       "a"."addressId",
       "c"."name" as "city",
       "u"."name" as "country"
from "addresses" as "a" 
join "cities" as "c" using ("cityId")
join "countries" as "u" using ("countryId"); 
