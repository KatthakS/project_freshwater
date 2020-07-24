from datetime import datetime
from freshwater import db

class Users(db.Model):  # Main User Db All registered Users will be stored here
    __tablename__ = "Users"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    password = db.Column(db.String)

    def __repr__(self):
        return "(r)Username: " + self.email + " : " + str(self.password)

    def __str__(self):
        return "(s)Username: " + self.email + " : " + self.password


class Messages(db.Model):
    __tablename__ = "Messages"
    id = db.Column(db.Integer, primary_key=True)
    fkSender = db.Column(db.String)
    fkReciever = db.Column(db.String)
    message = db.Column(db.String)
    timeCreated = db.Column(db.DateTime, default=datetime.utcnow)

    def dict(self):
        return {"id": self.id,
                "fkSender": self.fkSender,
                "fkReciever": self.fkReciever,
                "message": self.message,
                "timeCreated": self.timeCreated}


class Images(db.Model):  # Db where all Image paths are stored
    __tablename__ = "Images"  # Name of table
    id = db.Column(db.Integer, primary_key=True)
    # All images must be associted with the Onwer(/User)'s ID
    # fkIdUser = db.Column(db.Integer)
    # fkEmail = db.Column(db.String)  # Email can also be used as a forigen key
    fkIdPost = db.Column(db.Integer)  # Forgien Key for the associated Post
    # Informs us if a sell or Someone looking to rent our a unit
    # sellOrRent = db.Column(db.String)
    path = db.Column(db.String)  # Relative file path of image

    # def __repr__(self):
    #     return "(r)fkEmail: " + self.fkEmail + " : " + str(self.path)

    # def __str__(self):
    #     return "(s)fkEmail: " + self.fkEmail + " : " + self.path

    def dict(self):
        return {"id": self.id,
                # "fkIdUser": self.fkIdUser,
                # "fkEmail": self.fkEmail,
                "fkIdPost": self.fkIdPost,
                # "sellOrRent": self.sellOrRent,
                "path": self.path}


class Listings(db.Model):
    __tablename__ = "Listings"
    id = db.Column(db.Integer, primary_key=True)
    fkId = db.Column(db.Integer)
    fkEmail = db.Column(db.String)
    title = db.Column(db.String)
    houseType = db.Column(db.String)
    sellOrRent = db.Column(db.String)
    city = db.Column(db.String)
    street = db.Column(db.String)
    houseNum = db.Column(db.Integer)
    gps = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.Integer)
    roomNum = db.Column(db.Integer)
    adminAppr = db.Column(db.Integer)
    timeCreated = db.Column(db.DateTime, default=datetime.utcnow)
    petsAllowed = db.Column(db.Integer)
    postalCode = db.Column(db.Integer)

    def dict(self):
        return {"id": self.id,
                "fkId": self.fkId,
                "fkEmail": self.fkEmail,
                "title": self.title,
                "houseType": self.houseType,
                "sellOrRent": self.sellOrRent,
                "city": self.city,
                "street": self.street,
                "houseNum": self.houseNum,
                "gps": self.gps,
                "description": self.description,
                "price": self.price,
                "roomNum": self.roomNum,
                "adminAppr": self.adminAppr,
                "timeCreated": self.timeCreated,
                "petsAllowed": self.petsAllowed,
                "postalCode": self.postalCode}