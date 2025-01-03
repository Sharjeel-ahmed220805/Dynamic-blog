import AuthoreCard from '@/components/AuthorCard';
import Feature from '@/components/Feature';
import Mega from '@/components/Mega';
import NavBar from '@/components/NavBar'
import React from 'react'

export default function page() {
  return (
    <div className="bg-slate-200">
       
      
      <Feature />
      <Mega />
      <AuthoreCard />
    </div>
  );
}
