from graphviz import Digraph

# Création du diagramme ER
dot = Digraph('ER Diagram', format='png')

# Définition des entités
entities = {
    "Gymnase": ["ID", "Nom", "Adresse", "Téléphone"],
    "Membre": ["ID", "Nom", "Prénom", "Adresse", "Date de naissance", "Genre", "Gymnase_ID"],
    "Coach": ["ID", "Nom", "Prénom", "Âge", "Spécialité"],
    "Session": ["ID", "Type de sport", "Horaire", "Gymnase_ID"],
    "Participation": ["ID", "Membre_ID", "Session_ID"],
    "Encadrement": ["ID", "Coach_ID", "Session_ID"]
}

# Ajout des entités au diagramme
for entity, attributes in entities.items():
    label = f"{entity}| " + "|".join(attributes)
    dot.node(entity, label=f"{{ {label} }}", shape="record")

# Relations
relations = [
    ("Gymnase", "Session", "1, N"),  # Un gymnase peut avoir plusieurs sessions
    ("Membre", "Participation", "1, N"),  # Un membre peut participer à plusieurs sessions
    ("Session", "Participation", "1, N"),  # Une session peut avoir plusieurs membres
    ("Coach", "Encadrement", "1, N"),  # Un coach peut encadrer plusieurs sessions
    ("Session", "Encadrement", "1, 2"),  # Une session peut avoir 1 ou 2 coachs
]

# Ajout des relations au diagramme
for src, dst, cardinality in relations:
    dot.edge(src, dst, label=cardinality)

# Génération de l'image
diagram_path = "/mnt/data/ER_Diagram.png"
dot.render(diagram_path, format="png", cleanup=True)
diagram_path