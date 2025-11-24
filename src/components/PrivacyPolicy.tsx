export function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center mb-12">
          TxPPIE 株式会社 プライバシーポリシー（改訂版）
        </h1>

        <div className="prose prose-gray max-w-none">
          <p className="mb-8">
            TxPPIE 株式会社（代表取締役
            一二三
            晴也、以下「当社」といいます）は、お客様からお預かりする個人情報について、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。本ポリシーは、「個人情報の保護に関する法律」（以下「個人情報保護法」）その他の関係法令を遵守し、個人情報の適正な取扱いを確保することを目的とします。
          </p>

          <section className="mb-8">
            <h2 className="mb-4">1. 事業者情報</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-2">
              <p>法人名：TxPPIE 株式会社</p>
              <p>住所：大阪府大阪市淀川区東三国1丁目20-9 201号室</p>
              <p>代表者：一二三 晴也</p>
              <p>個人情報保護管理者：代表取締役 一二三 晴也</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4">2. 個人情報の取得</h2>
            <p className="mb-4">
              当社は、研究活動、サービス提供、問い合わせ対応等にあたり、氏名・住所・電話番号・メールアドレス・住所印刷などの個人情報を取得します。
            </p>
            <p className="mb-4">
              また、当社は医療・健康・副作用情報・ゲノム情報等に関する<strong>要配慮個人情報</strong>を、研究目的またはサービス提供に必要な範囲で取得・利用する場合があります。
            </p>
            <p className="mb-4">
              取得に際しては、法令に基づき、本人の同意取得及び適切な安全管理措置を講じます。
            </p>
            <p>
              当社が既名加工情報または仮名加工情報を作成・利用する場合には、再識別防止措置その他の必要な措置を行い、法令に従い適切に取り扱います。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4">3. 個人情報の利用目的</h2>
            <p className="mb-4">当社は、取得した個人情報を以下の目的で利用します：</p>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li>創作用研究・臨床研究・ゲノム解析等の学術研究および創薬研究の推進のため</li>
              <li>
                医療従事者向けの研究支援サービス、ゲノム解析サービス等の開発・改善・提供のため
              </li>
              <li>患者団体・研究機関・医療機関との連携、共同研究の企画・運営のため</li>
              <li>
                研究成果やサービスに関する情報提供、セミナー・イベントの案内のため
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}