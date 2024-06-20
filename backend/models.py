from app import db

class Projects(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100),nullable=False)
    role = db.Column(db.String(50), nullable =False)
    description = db.Column(db.Text, nullable =False)
    img_url = db.Column(db.String(200),nullable = True)
    gender = db.Column(db.String(10),nullable = True)
    
    def to_json (self):
        return {
            "id":self.id,
            "role":self.role,
            "name":self.name,
            "description":self.description,
            "imgUrl":self.img_url,
            "gender":self.gender,
        }