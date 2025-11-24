import ceoImage from '@/assets/723e337fc4a3b4fb4bc5c6c6ed5a0e2b55f76633.png';

export function CeoMessage() {
  const messages = [
    '私は幼い頃に\"いじめ\"や、\"大切な人の死\"を経験してきたことで、<span class="text-[#00897B]">人が抱える痛みを深く理解</span>できるようになりました。同時に、自分は<span class="text-[#00897B]">「苦しむ誰かを支える存在でありたい」</span>と強く願うようになれました。',
    '12歳の時に観たパンデミック映画を機に、人を助けるツールとして<span class="text-[#00897B]">ワクチンに関心</span>を抱き続け、薬学部に進学しました。2022年から国立研究所でワクチン開発に従事し、順調に研究者としての道を歩んでいました。',
    'しかし、コロナ禍を経て、ワクチン副作用を訴えても、<span class="text-[16px] text-[#00897B] inline-block mx-1">\"情報不足\"</span>により<span class="text-[#00897B]">診断も補償も受けられずに苦しむ人々</span>の存在を知りました。多くの人々の<span class="text-[#00897B]">「助けを求める声」</span>を聞いた以上、行動を起こさずにはいられませんでした。',
    '私は1人の研究者として、<span class="text-[#00897B]">「患者様の声」への対応は「研究開発の一環」として正当に扱われるべき</span>だと考えています。また、この社会課題はワクチンのみならず、<span class="text-[#00897B]">他の医薬品の副作用や難病・希少疾患の領域</span>においても深く根付いていることに気づきました。',
    '私にとっては<span class="text-[#00897B]">「人を助ける」が人生の目的</span>であり、「ワクチン研究」は手段の一つに過ぎませんでした。次は起業という手段を通して、<span class="text-[#00897B]\">「誰一人取り残さない医療」</span>を実現してみせます。',
  ];

  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00897B]/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="mb-12 sm:mb-16">
          <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">Message From CEO</p>
          <h2 className="text-gray-900 mb-4 sm:mb-6">代表メッセージ</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            {/* CEO写真 */}
            <div className="relative group mb-6">
              <div className="absolute inset-0 bg-[#00897B]/20 rounded-2xl blur-xl group-hover:bg-[#00897B]/30 transition-all" />
              <img 
                src={ceoImage} 
                alt="代表取締役CEO 一二三 晴也" 
                className="relative w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-2xl"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-[#00897B] mb-2 tracking-wide uppercase">CEO</p>
              <p className="text-2xl text-gray-900 mb-4 sm:mb-6">一二三 晴也</p>
            </div>
          </div>

          <h3 className="text-center mb-8 sm:mb-12 text-[#00897B]">
            誰一人取り残さない医療の実現へ
          </h3>

          <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
            {messages.map((message, index) => (
              <p key={index} className="text-base text-[16px]" dangerouslySetInnerHTML={{ __html: message }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}