'use client';

import { motion } from 'framer-motion';
import { Note } from '../types';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

const gradients = [
  'from-blue-400 to-cyan-300',
  'from-purple-400 to-pink-300',
  'from-green-400 to-teal-300',
  'from-orange-400 to-yellow-300',
  'from-red-400 to-pink-300',
  'from-indigo-400 to-purple-300',
];

export default function NoteCard({ note, onEdit, onDelete }: NoteCardProps) {
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  
  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
      whileHover={{ y: -8, scale: 1.02 }}
      layout
    >
      {/* Colorful top bar */}
      <div className={`h-2 bg-gradient-to-r ${randomGradient}`} />
      
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {note.note_title}
        </h2>

        {/* Content */}
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
          {note.note_content}
        </p>

        {/* Date */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {new Date(note.created_on).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <motion.button
            onClick={() => onEdit(note)}
            className="flex-1 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors font-medium text-sm flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit
          </motion.button>
          <motion.button
            onClick={() => onDelete(note.note_id)}
            className="flex-1 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
          </motion.button>
        </div>
      </div>

      {/* Decorative corner element */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${randomGradient} opacity-10 rounded-bl-full`} />
    </motion.div>
  );
}