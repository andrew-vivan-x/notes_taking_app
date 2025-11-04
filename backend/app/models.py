from sqlalchemy import Column, String, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from datetime import datetime
import uuid
from .database import Base

def generate_uuid():
    return str(uuid.uuid4())

class User(Base):
    __tablename__ = "users"

    user_id = Column(String(36), primary_key=True, default=generate_uuid)
    user_name = Column(String(100), nullable=False)
    user_email = Column(String(255), unique=True, nullable=False, index=True)
    password = Column(String(255), nullable=False)
    last_update = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    created_on = Column(DateTime, default=datetime.utcnow)

    notes = relationship("Note", back_populates="owner", cascade="all, delete-orphan")

class Note(Base):
    __tablename__ = "notes"

    note_id = Column(String(36), primary_key=True, default=generate_uuid)
    note_title = Column(String(255), nullable=False)
    note_content = Column(Text, nullable=False)
    user_id = Column(String(36), ForeignKey("users.user_id"), nullable=False)
    last_update = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    created_on = Column(DateTime, default=datetime.utcnow)

    owner = relationship("User", back_populates="notes")