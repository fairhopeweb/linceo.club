import { LoginOAuth, PageWrapper } from "@/routes/index.jsx"

export const handler = {
  GET: async (req, ctx) => {
    const url = new URL(req.url)
    ctx.state.url = url
    const resp = await ctx.render({ ...ctx.state })
    return new Response(resp.body, {
      headers: resp.headers,
      status: 401,
    })
  },
}

export default function Page401({ data }) {
  const metadata = {
    title: "Unauthorized",
  }
  return (
    <PageWrapper data={data} meta={metadata}>
      <div class="border-solid border-4 border-blue p-2">
        <h1 class="text-red text-4xl">
          401 <span class="text-orange text-2xl">Unauthorized</span>
        </h1>
        <p class="text-yellow">That's an error, Whoops!</p>
        <p class="text-orange">Try logging in?</p>
        <p>
          <LoginOAuth provider="facebook">Login with Facebook</LoginOAuth>
        </p>
      </div>
    </PageWrapper>
  )
}
