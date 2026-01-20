
export interface NavItem {
  label: string;
  href: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Sports' | 'Arts' | 'Community';
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
