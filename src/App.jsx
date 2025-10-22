import './App.css';
import Card from './assets/components/Card';
import Button from './assets/components/Button';

function App() {

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center p-6'>
      <Card title="Reusable Components Demo Card" className='max-w-sm w-full'>
        <p className='mb-4'>This is reusable Card component with a Button inside it.</p>
        <div className='flex gap-2'>
          <Button
            variant='primary'
            onClick={() => alert('Primary button clicked')}
          >
            Primary</Button>
          <Button
            variant='secondary'
            onClick={() => alert('Secondary button clicked')}
          >
            Secondary</Button>
          <Button
            variant='outline'
            onClick={() => alert('Outline button clicked')}
          >
            Outline</Button>
        </div>
      </Card>
    </div>
  )
}

export default App
