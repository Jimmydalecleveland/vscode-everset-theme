package datasources

import (
	"context"
	"log"

	graphql "github.com/graph-gophers/graphql-go"
)

type AdventuringGear struct {
	ID                  graphql.ID
	Name                string
	ItemType            string
	Description         *string
	Category            *string
	CategoryDescription *string
	Cost                *string
	Weight              *string
}

type QuantifiedAdventuringGear struct {
	AdventuringGear
	Quantity int32
}

func (r *Resolver) AdventuringGear(ctx context.Context, args struct{ ID int32 }) *AdventuringGear {
	q := `
		SELECT 
			i."ID", 
			i.name, 
			i.type,
			a.description, 
			a.category, 
			a."categoryDescription", 
			i.cost, 
			i.weight 
		FROM "AdventuringGear" a
		JOIN "Item" i ON i."ID" = a."itemID"
		WHERE i."ID" = $1
 `
	var adventuringGear AdventuringGear
	var tempID int32
	err := r.DB.QueryRow(q, args.ID).Scan(
		&tempID,
		&adventuringGear.Name,
		&adventuringGear.ItemType,
		&adventuringGear.Description,
		&adventuringGear.Category,
		&adventuringGear.CategoryDescription,
		&adventuringGear.Cost,
		&adventuringGear.Weight,
	)
	if err != nil {
		log.Print("Error received during AdventuringGear query -> ", err)
		return nil
	}
	adventuringGear.ID = Int32ToGraphqlID(tempID)

	return &adventuringGear
}

func (r *Resolver) AdventuringGears() *[]*AdventuringGear {
	q := `
		SELECT 
			i."ID", 
			i.name, 
			i.type,
			a.description, 
			a.category, 
			a."categoryDescription", 
			i.cost, 
			i.weight 
		FROM "AdventuringGear" a
		JOIN "Item" i ON i."ID" = a."itemID"
	`
	rows, err := r.DB.Query(q)
	if err != nil {
		log.Fatal(err)
	}

	var adventuringGears []*AdventuringGear
	for rows.Next() {
		var adventuringGear AdventuringGear
		var tempID int32
		err = rows.Scan(
			&tempID,
			&adventuringGear.Name,
			&adventuringGear.ItemType,
			&adventuringGear.Description,
			&adventuringGear.Category,
			&adventuringGear.CategoryDescription,
			&adventuringGear.Cost,
			&adventuringGear.Weight,
		)
		if err != nil {
			log.Fatal(err)
		}
		adventuringGear.ID = Int32ToGraphqlID(tempID)
		adventuringGears = append(adventuringGears, &adventuringGear)
	}

	return &adventuringGears
}
