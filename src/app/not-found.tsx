import {Layout} from '@/components';
import Image from 'next/image';
import Link from 'next/link';

function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-5">
        <Image
          src={'/images/not_found.webp'}
          alt="not_found"
          width={640}
          height={480}
        />
        <div>
          <Link href="/">Go back to Home</Link>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
