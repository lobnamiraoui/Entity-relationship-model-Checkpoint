The ERD includes:

Entities: Gymnasium, Member, Session, Coach
Attributes: Descriptive properties for each entity
Relationships:
Member ↔ Gymnasium (Many-to-One)
Member ↔ Session (Many-to-Many)
Coach ↔ Session (Many-to-Many)
Session ↔ Gymnasium (Many-to-One)
Constraints: Max 20 members/session, Max 2 coaches/session