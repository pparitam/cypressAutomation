class sortingRecommendation {
    public textMap = {
        'mobile': {
            'boohoo.com': {
                'UK': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'AU': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'NZ': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'US': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'CA': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'IE': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'EU': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'FR': ['Nous recommandons', 'Nouveautés', 'Prix croissant', 'Prix décroissant'],
                'ES': ['Recomendamos', 'Novedades', 'Precio de menor a mayor', 'Precio de mayor a menor'],
                'NL': ['Wij raden aan', 'Nieuwste in', 'Prijs laag naar hoog', 'Prijs van hoog naar laag'],
                'DE': ['Wir empfehlen', 'Neuheiten', 'Niedrigster Preis', 'Höchster Preis'],
                'IT': ['Consigliamo', 'Novità', 'Prezzo crescente', 'Prezzo descrescente'],
                'SE': ['Vi rekommenderar', 'Senast inkomna', 'Pris (lägst till högst)', 'Pris (högst till lägst)'],
                'DK': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'FI': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'NO': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'IL': [' (מחיר (מהגבוה לנמוך', '(מחיר (מהנמוך לגבוה', 'ההמלצה שלנו', 'החדשים ביותר']
            },
            'karenmillen.com': {
                'UK': ['Bestsellers', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'AU': ['Bestsellers', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'IE': ['Bestsellers', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'US': ['Bestsellers', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'EU': ['Bestsellers', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
            },
            'boohooman.com': {
                'UK': ['Must Haves', 'New In', 'Price (low to high)', 'Price (high to low)'],
                'AU': ['Must Haves', 'New In', 'Price (low to high)', 'Price (high to low)'],
                'US': ['Must Haves', 'New In', 'Price (low to high)', 'Price (high to low)'],
                'DE': ['Must-Haves', 'Neuheiten', 'Preis (niedrig bis hoch)', 'Preis (hoch bis niedrig)'],
                'FR': ['Indispensables', 'Nouveautés', 'Prix (ordre croissant)', 'Prix (ordre décroissant)'],
                'NL': ['Must-have mode', 'Nieuw binnen', 'Prijs (Laag - Hoog)', 'Prijs (hoog naar laag'],
                'IE': ['Most Relevant', 'Newest In', 'Price (Low to High)', 'Price (High to Low)'],
                'EU': ['Most Relevant', 'Newest In', 'Price (Low to High)', 'Price (High to Low)'],
            },
            'nastygal.com': {
                'UK': ['Featured', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'US': ['Featured', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'CA': ['Featured', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'EU': ['Featured', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'IE': ['Featured', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'AU': ['featured', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'FR': ['Nos préférés', 'Prix croissant', 'Prix décroissant', 'Les plus récent'],
            }
        },
        'web': {
            'boohoo.com': {
                'UK': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'AU': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'NZ': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'US': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'CA': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'IE': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'EU': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'FR': ['Nous recommandons', 'Nouveautés', 'Prix croissant', 'Prix décroissant'],
                'ES': ['Recomendamos', 'Novedades', 'Precio de menor a mayor', 'Precio de mayor a menor'],
                'NL': ['Wij raden aan', 'Nieuwste in', 'Prijs laag naar hoog', 'Prijs van hoog naar laag'],
                'DE': ['Wir empfehlen', 'Neuheiten', 'Niedrigster Preis', 'Höchster Preis'],
                'IT': ['Consigliamo', 'Novità', 'Prezzo crescente', 'Prezzo descrescente'],
                'SE': ['Vi rekommenderar', 'Senast inkomna', 'Pris (lägst till högst)', 'Pris (högst till lägst)'],
                'DK': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'FI': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'NO': ['We Recommend', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'IL': ['(מחיר (מהגבוה לנמוך', '(מחיר (מהנמוך לגבוה', 'ההמלצה שלנו', 'החדשים ביותר']
            },
            'karenmillen.com': {
                'UK': ['Bestsellers', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'AU': ['Bestsellers', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'IE': ['Bestsellers', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'US': ['Bestsellers', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'EU': ['Bestsellers', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
            },
            'boohooman.com': {
                'UK': ['Must Haves', 'New In', 'Price (low to high)', 'Price (high to low)'],
                'AU': ['Must Haves', 'New In', 'Price (low to high)', 'Price (high to low)'],
                'US': ['Must Haves', 'New In', 'Price (low to high)', 'Price (high to low)'],
                'DE': ['Must-Haves', 'Neuheiten', 'Preis (niedrig bis hoch)', 'Preis (hoch bis niedrig)'],
                'FR': ['Indispensables', 'Nouveautés', 'Prix (ordre croissant)', 'Prix (ordre décroissant)'],
                'NL': ['Must-have mode', 'Nieuw binnen', 'Prijs (Laag - Hoog)', 'Prijs (hoog naar laag'],
                'IE': ['Most Relevant', 'Newest In', 'Price (Low to High)', 'Price (High to Low)'],
                'EU': ['Most Relevant', 'Newest In', 'Price (Low to High)', 'Price (High to Low)'],
            },
            'nastygal.com': {
                'UK': ['Featured', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'US': ['Featured', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'CA': ['Featured', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'EU': ['Featured', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'IE': ['Featured', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'AU': ['featured', 'Price (Low to High)', 'Price (High to Low)', 'Newest In'],
                'FR': ['Nos préférés', 'Prix croissant', 'Prix décroissant', 'Les plus récent'],
            }
        }
    }
}
export default new sortingRecommendation();