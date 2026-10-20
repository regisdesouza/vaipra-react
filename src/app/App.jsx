import { useState } from 'react';
import { HomePage } from '@/pages/home';
import { DrawModal } from '@/features/draw-destination';

// O estado do modal fica aqui e desce por props até os botões de CTA.
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <HomePage onOpenModal={() => setIsModalOpen(true)} />
      <DrawModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;
