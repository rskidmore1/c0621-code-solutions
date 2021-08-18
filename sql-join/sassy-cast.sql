select "a"."firstName", 
       "a"."lastName"
from "films" as "f" 
join "castMembers" as "cm" using ("filmId") 
join "actors" as "a" using ("actorId")
where "f"."title" = 'Jersey Sassy'
