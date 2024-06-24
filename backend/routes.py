from app import app, db
from flask import request, jsonify
from models import Projects

#CRUD Operations
#Get all projects
@app.route("/api/project", methods = ["GET"])
def get_projects():
    project = Projects.query.all()
    result = [projects.to_json() for projects in project]
    return jsonify(result)

#Create Projects
@app.route("/api/project", methods = ["POST"])
def create_project():
    try:
        data = request.json
        required_fields = ["name","role","description","gender"]
        for field in required_fields:
            if field not in data or not data.get(field):
                return jsonify({"error":f'Missing required field: {field}'}), 400
            
        name = data.get("name")
        role = data.get("role")
        description = data.get("description")
        gender = data.get("gender")
        
        #Fetch Image
        if gender == "male":
            img_url = f"https://avatar.iran.liara.run/public/boy?username={name}"
        elif gender == "female":
            img_url = f"https://avatar.iran.liara.run/public/boy?username={name}"
        else:
            img_url= None
            
        new_project = Projects(name=name,role = role, description = description, gender=gender, img_url= img_url)
        
        db.session.add(new_project)
        db.session.commit()
        return jsonify(new_project.to_json()),201
    except Exception as e:
        db.session.rollback()
        return jsonify({"Error":str(e)}), 500
    
    #Delete User
@app.route("/api/project/<int:id>", methods = ["DELETE"])
def delete_project(id):
    try:
        project = Projects.query.get(id)
        if project is None:
            return jsonify({"error": "Project Not Found"}), 404
        db.session.delete(project)
        db.session.commit()
        return jsonify ({"msg":"Project Deleted"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

#UPDATE ID
@app.route("/api/project/<int:id>", methods = ["PATCH"])
def update_project(id):
    try:
        project = Projects.query.get(id)
        if project is None:
            return jsonify({"error": "Project Not Found"}), 404
        data = request.json
        project.name = data.get("name", project.name)
        project.role = data.get("role", project.role)
        project.description = data.get("description", project.description)
        project.gender = data.get("gender", project.gender)
        db.session.commit()
        return jsonify (project.to_json()), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500