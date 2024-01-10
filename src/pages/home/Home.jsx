import React from 'react';
import {Button, buttonVariants} from '@/components/ui/Button';


const Home = () => {
  return (
    <div>
      <button className={buttonVariants({ variant: "outline" })}>Click here</button>

      <Button>
        Hello world
      </Button>
    </div>
  )
}

export default Home
