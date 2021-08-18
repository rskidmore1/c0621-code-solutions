select "name", count("categoryId") from "categories"
join "filmCategory" using ("categoryId")
join "castMembers" using ("filmId")
join "actors" using ("actorId") 
where "firstName" = 'Lisa' and "lastName" = 'Monroe'
group by "categoryId"

