
from flask import Flask, jsonify, request, json
from flask_pymongo import PyMongo
from bson import ObjectId, json_util
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "ADD CONNECTION STRING HERE"
mongo = PyMongo(app)
reportCollection = mongo.db.reports #Reports is the name of my collection, may be different for you.

@app.route('/api/create', methods=['POST'])
def create():
  request_data = json.loads(request.data)['formData']
  report_id = reportCollection.insert_one({
    'IncidentAddress': request_data['IncidentAddress'],
    'IncidentCity': request_data['IncidentCity'],
    'IncidentZipcode': request_data['IncidentZipcode'],
    'IncidentCounty': request_data['IncidentCounty'],
    'IncidentState': request_data['IncidentState'],
    'IncidentDescription': request_data['IncidentDescription'],
    'IncidentSource': request_data['IncidentSource'],
    'IncidentStatus': request_data['IncidentStatus'],
    'SourceName': request_data['SourceName'],
    'OtherDetails': request_data['OtherDetails']
  }).inserted_id
  print(report_id)
  return {'201': f'{report_id}'}

@app.route('/api/<id>', methods=['GET'])
def show(id):
  bson_id = ObjectId(id)
  return json.loads(json_util.dumps(reportCollection.find_one({'_id': bson_id})))

if __name__ == '__main__':
  app.run(debug=True)