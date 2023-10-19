'use client';

import { insertUserSchema } from '@entities/user';
import { apiClient } from '@shared/api/client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export default function Home() {
  const { handleSubmit } = useForm<z.infer<typeof insertUserSchema>>({
    resolver: zodResolver(insertUserSchema),
    defaultValues: {
      id: '321',
    }
  })

  const { mutateAsync: createUser } = apiClient.users.create.useMutation({
    onSuccess: () => console.log('hello')
  });

  const handleCreateUser = handleSubmit(async (values) => {
    await createUser({
      body: {
        id: '123',
        name: 'Benjamin',
      }
    });
  })

  return (
    <form onSubmit={handleCreateUser}>
      <button>Submit</button>
    </form>
  )
}
