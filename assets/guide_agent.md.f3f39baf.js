import{_ as n,c as a,o as s,a as t}from"./app.4f7c959e.js";const h='{"title":"\u4E00\u952E\u5B89\u88C5Agent","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u952E\u5B89\u88C5Agent","slug":"\u4E00\u952E\u5B89\u88C5agent"},{"level":3,"title":"\u51C6\u5907\u5DE5\u4F5C","slug":"\u51C6\u5907\u5DE5\u4F5C"},{"level":3,"title":"\u5728 Linux \u4E2D\u4E00\u952E\u5B89\u88C5","slug":"\u5728-linux-\u4E2D\u4E00\u952E\u5B89\u88C5"},{"level":3,"title":"\u5728 Windows \u4E2D\u4E00\u952E\u5B89\u88C5","slug":"\u5728-windows-\u4E2D\u4E00\u952E\u5B89\u88C5"},{"level":2,"title":"\u5176\u4ED6\u65B9\u5F0F\u5B89\u88C5Agent","slug":"\u5176\u4ED6\u65B9\u5F0F\u5B89\u88C5agent"},{"level":3,"title":"\u5728 Linux \u4E2D\u5B89\u88C5Agent","slug":"\u5728-linux-\u4E2D\u5B89\u88C5agent"},{"level":3,"title":"\u5728 \u5176\u4ED6Linux \u5982 alpine \u4F7F\u7528 openrc \u7684\u53D1\u884C\u7248 \u5B89\u88C5 Agent","slug":"\u5728-\u5176\u4ED6linux-\u5982-alpine-\u4F7F\u7528-openrc-\u7684\u53D1\u884C\u7248-\u5B89\u88C5-agent"},{"level":3,"title":"\u5728 Windows \u4E2D\u5B89\u88C5Agent","slug":"\u5728-windows-\u4E2D\u5B89\u88C5agent"},{"level":3,"title":"\u5728 MacOS \u4E2D\u5B89\u88C5Agent","slug":"\u5728-macos-\u4E2D\u5B89\u88C5agent"},{"level":3,"title":"\u5728 OpenWRT \u4E2D\u5B89\u88C5Agent","slug":"\u5728-openwrt-\u4E2D\u5B89\u88C5agent"},{"level":2,"title":"\u81EA\u5B9A\u4E49Agent\u76D1\u63A7\u9879\u76EE","slug":"\u81EA\u5B9A\u4E49agent\u76D1\u63A7\u9879\u76EE"},{"level":2,"title":"FAQ","slug":"faq"},{"level":3,"title":"Agent \u6709 Docker \u955C\u50CF\u5417\uFF1F","slug":"agent-\u6709-docker-\u955C\u50CF\u5417\uFF1F"}],"relativePath":"guide/agent.md","lastUpdated":1659428110000}',e={},p=t(`<p><strong>\u54EA\u5412\u76D1\u63A7\u7684\u88AB\u63A7\u7AEF\u670D\u52A1\u88AB\u79F0\u4E3AAgent\uFF0C\u672C\u6587\u6863\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u88AB\u63A7\u7AEF\u670D\u52A1\u5668\u4E0A\u5B89\u88C5Agent\uFF0C\u5E76\u4E0EDashboard\u8FDE\u63A5</strong><br><br></p><h2 id="\u4E00\u952E\u5B89\u88C5agent" tabindex="-1">\u4E00\u952E\u5B89\u88C5Agent <a class="header-anchor" href="#\u4E00\u952E\u5B89\u88C5agent" aria-hidden="true">#</a></h2><p>\u76EE\u524D\u54EA\u5412\u76D1\u63A7\u5DF2\u652F\u6301\u5728Windows\u548CLinux\u4E0A\u4E00\u952E\u5B89\u88C5Agent\uFF0C\u9075\u5FAA\u672C\u6587\u6863\u7684\u6B65\u9AA4\uFF0C\u4F60\u53EF\u4EE5\u5F88\u8F7B\u677E\u7684\u5728\u670D\u52A1\u5668\u4E0A\u90E8\u7F72\u5B83<br><br></p><h3 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1">\u51C6\u5907\u5DE5\u4F5C <a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a></h3><p>\u4F60\u9700\u8981\u63D0\u524D\u5728\u7BA1\u7406\u9762\u677F\u4E2D\u8BBE\u7F6E\u597D\u901A\u4FE1\u57DF\u540D\uFF0C\u6B64\u57DF\u540D\u4E0D\u53EF\u4EE5\u63A5\u5165CDN\uFF0C\u8FD9\u91CC\u4EE5\u524D\u9762\u63D0\u5230\u8FC7\u7684\u793A\u4F8B\u901A\u4FE1\u57DF\u540D \u201C<a href="http://data.example.com" target="_blank" rel="noopener noreferrer">data.example.com</a>\u201D \u6765\u505A\u6F14\u793A<br> \u8FDB\u5165\u540E\u53F0\u7BA1\u7406\u9762\u677F\uFF0C\u8F6C\u5230\u201C\u8BBE\u7F6E\u201D\u9875\uFF0C\u5728\u201C\u672A\u63A5\u5165CDN\u7684\u9762\u677F\u670D\u52A1\u5668\u57DF\u540D/IP\u201D\u9879\u4E2D\u586B\u5165\u901A\u4FE1\u57DF\u540D\uFF0C\u7136\u540E\u70B9\u51FB&quot;\u4FDD\u5B58&quot;<br><br></p><h3 id="\u5728-linux-\u4E2D\u4E00\u952E\u5B89\u88C5" tabindex="-1">\u5728 Linux \u4E2D\u4E00\u952E\u5B89\u88C5 <a class="header-anchor" href="#\u5728-linux-\u4E2D\u4E00\u952E\u5B89\u88C5" aria-hidden="true">#</a></h3><ul><li>\u9996\u5148\u5728\u7BA1\u7406\u9762\u677F\u4E2D\u6DFB\u52A0\u4E00\u53F0\u670D\u52A1\u5668</li><li>\u70B9\u51FB\u65B0\u6DFB\u52A0\u7684\u670D\u52A1\u5668\u65C1\uFF0C\u7EFF\u8272\u7684Linux\u56FE\u6807\u6309\u94AE\uFF0C\u590D\u5236\u4E00\u952E\u5B89\u88C5\u547D\u4EE4</li><li>\u5728\u88AB\u63A7\u7AEF\u670D\u52A1\u5668\u4E2D\u8FD0\u884C\u590D\u5236\u7684\u4E00\u952E\u5B89\u88C5\u547D\u4EE4\uFF0C\u7B49\u5F85\u5B89\u88C5\u5B8C\u6210\u540E\u8FD4\u56DE\u5230Dashboard\u4E3B\u9875\u67E5\u770B\u670D\u52A1\u5668\u662F\u5426\u4E0A\u7EBF<br><br></li></ul><h3 id="\u5728-windows-\u4E2D\u4E00\u952E\u5B89\u88C5" tabindex="-1">\u5728 Windows \u4E2D\u4E00\u952E\u5B89\u88C5 <a class="header-anchor" href="#\u5728-windows-\u4E2D\u4E00\u952E\u5B89\u88C5" aria-hidden="true">#</a></h3><ul><li>\u9996\u5148\u5728\u7BA1\u7406\u9762\u677F\u4E2D\u6DFB\u52A0\u4E00\u53F0\u670D\u52A1\u5668</li><li>\u70B9\u51FB\u65B0\u6DFB\u52A0\u7684\u670D\u52A1\u5668\u65C1\uFF0C\u7EFF\u8272\u7684Windows\u56FE\u6807\u6309\u94AE\uFF0C\u590D\u5236\u4E00\u952E\u5B89\u88C5\u547D\u4EE4</li><li>\u8FDB\u5165Windows\u670D\u52A1\u5668\uFF0C\u8FD0\u884CPowerShell\uFF0C\u5728PowerShell\u4E2D\u8FD0\u884C\u590D\u5236\u7684\u5B89\u88C5\u547D\u4EE4</li><li>\u5982\u9047\u5230\u786E\u8BA4\u300C\u6267\u884C\u7B56\u7565\u53D8\u66F4\u300D\u8BF7\u9009\u62E9 Y</li><li>\u7B49\u5F85\u5B89\u88C5\u5B8C\u6210\u540E\u8FD4\u56DEDashboard\u4E3B\u9875\u67E5\u770B\u670D\u52A1\u5668\u662F\u5426\u4E0A\u7EBF<br><br><br><br></li></ul><h2 id="\u5176\u4ED6\u65B9\u5F0F\u5B89\u88C5agent" tabindex="-1">\u5176\u4ED6\u65B9\u5F0F\u5B89\u88C5Agent <a class="header-anchor" href="#\u5176\u4ED6\u65B9\u5F0F\u5B89\u88C5agent" aria-hidden="true">#</a></h2><h3 id="\u5728-linux-\u4E2D\u5B89\u88C5agent" tabindex="-1">\u5728 Linux \u4E2D\u5B89\u88C5Agent <a class="header-anchor" href="#\u5728-linux-\u4E2D\u5B89\u88C5agent" aria-hidden="true">#</a></h3><ul><li>\u9996\u5148\u5728\u7BA1\u7406\u9762\u677F\u4E2D\u6DFB\u52A0\u4E00\u53F0\u670D\u52A1\u5668</li><li>\u5728\u88AB\u63A7\u670D\u52A1\u5668\u4E2D\uFF0C\u8FD0\u884C\u811A\u672C\uFF08\u4F4D\u4E8E\u4E2D\u56FD\u5927\u9646\u7684\u670D\u52A1\u5668\u8BF7\u4F7F\u7528\u955C\u50CF\uFF09\uFF1A</li></ul><div class="language-bash"><pre><code><span class="token function">curl</span> -L https://raw.githubusercontent.com/naiba/nezha/master/script/install.sh  -o nezha.sh <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> +x nezha.sh <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> ./nezha.sh
</code></pre></div><p>\u5982\u679C\u4F60\u7684\u88AB\u63A7\u670D\u52A1\u5668\u4F4D\u4E8E\u4E2D\u56FD\u5927\u9646\uFF0C\u53EF\u4EE5\u4F7F\u7528\u955C\u50CF\uFF1A</p><div class="language-bash"><pre><code><span class="token function">curl</span> -L https://jihulab.com/nezha/nezha/-/raw/master/script/install.sh -o nezha.sh <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> +x nezha.sh <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token assign-left variable">CN</span><span class="token operator">=</span>true ./nezha.sh
</code></pre></div><ul><li>\u9009\u62E9\u201C\u5B89\u88C5\u76D1\u63A7Agent\u201D</li><li>\u8F93\u5165\u901A\u4FE1\u57DF\u540D\uFF0C\u5982\uFF1A\u201D<a href="http://data.example.com" target="_blank" rel="noopener noreferrer">data.example.com</a>\u201C</li><li>\u8F93\u5165\u9762\u677F\u901A\u4FE1\u7AEF\u53E3\uFF08RPC\u7AEF\u53E3\uFF09\uFF0C\u9ED8\u8BA4\u4E3A5555</li><li>\u8F93\u5165Agent\u5BC6\u94A5\uFF0CAgent\u5BC6\u94A5\u5728\u7BA1\u7406\u9762\u677F\u4E2D\u6DFB\u52A0\u670D\u52A1\u5668\u65F6\u751F\u6210\uFF0C\u53EF\u4EE5\u5728\u7BA1\u7406\u9762\u677F\u4E2D\u7684\u201C\u4E3B\u673A\u201D\u9875\u4E2D\u627E\u5230</li><li>\u7B49\u5F85\u5B89\u88C5\u5B8C\u6210\u540E\u8FD4\u56DEDashboard\u4E3B\u9875\u67E5\u770B\u670D\u52A1\u5668\u662F\u5426\u4E0A\u7EBF<br><br></li></ul><h3 id="\u5728-\u5176\u4ED6linux-\u5982-alpine-\u4F7F\u7528-openrc-\u7684\u53D1\u884C\u7248-\u5B89\u88C5-agent" tabindex="-1">\u5728 \u5176\u4ED6Linux \u5982 alpine \u4F7F\u7528 openrc \u7684\u53D1\u884C\u7248 \u5B89\u88C5 Agent <a class="header-anchor" href="#\u5728-\u5176\u4ED6linux-\u5982-alpine-\u4F7F\u7528-openrc-\u7684\u53D1\u884C\u7248-\u5B89\u88C5-agent" aria-hidden="true">#</a></h3><ul><li>\u4FEE\u6539 SERVER\u3001SECRET\u3001TLS \u7136\u540E\u5728 shell \u4E2D \u6267\u884C</li></ul><div class="language-shell"><pre><code><span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/init.d/nezha-agent<span class="token operator">&lt;&lt;</span> <span class="token string">EOF
#!/sbin/openrc-run
SERVER=&quot;&quot; #dashboard \u5730\u5740 ip:port
SECRET=&quot;&quot; #SECRET
TLS=&quot;&quot; # \u662F\u5426\u542F\u7528 tls \u662F &quot;--tls&quot; \u5426\u7559\u7A7A
NZ_BASE_PATH=&quot;/opt/nezha&quot;
NZ_AGENT_PATH=&quot;<span class="token variable">\${NZ_BASE_PATH}</span>/agent&quot;
pidfile=&quot;/run/<span class="token variable">\${RC_SVCNAME}</span>.pid&quot;
command=&quot;/opt/nezha/agent/nezha-agent&quot;
command_args=&quot;-s <span class="token variable">\${SERVER}</span>  -p <span class="token variable">\${SECRET}</span> <span class="token variable">\${TLS}</span>&quot;
command_background=true
depend() {
	need net
}
checkconfig() {
	GITHUB_URL=&quot;github.com&quot;
	if [ ! -f &quot;<span class="token variable">\${NZ_AGENT_PATH}</span>/nezha-agent&quot; ]; then
		if [[ <span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -m <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;x86_64&#39;</span><span class="token variable">)</span></span> != &quot;&quot; ]]; then
			os_arch=&quot;amd64&quot;
		elif [[ <span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -m <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;i386\\|i686&#39;</span><span class="token variable">)</span></span> != &quot;&quot; ]]; then
			os_arch=&quot;386&quot;
		elif [[ <span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -m <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;aarch64\\|armv8b\\|armv8l&#39;</span><span class="token variable">)</span></span> != &quot;&quot; ]]; then
			os_arch=&quot;arm64&quot;
		elif [[ <span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -m <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;arm&#39;</span><span class="token variable">)</span></span> != &quot;&quot; ]]; then
			os_arch=&quot;arm&quot;
		elif [[ <span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -m <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;s390x&#39;</span><span class="token variable">)</span></span> != &quot;&quot; ]]; then
			os_arch=&quot;s390x&quot;
		elif [[ <span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -m <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;riscv64&#39;</span><span class="token variable">)</span></span> != &quot;&quot; ]]; then
			os_arch=&quot;riscv64&quot;
		fi
		local version=<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -m <span class="token number">10</span> -sL <span class="token string">&quot;https://api.github.com/repos/naiba/nezha/releases/latest&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;tag_name&quot;</span> <span class="token operator">|</span> <span class="token function">head</span> -n <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">awk</span> -F <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/\\&quot;//g;s/,//g;s/ //g&#39;</span><span class="token variable">)</span></span>
		if [ ! -n &quot;<span class="token variable">$version</span>&quot; ]; then
			version=<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -m <span class="token number">10</span> -sL <span class="token string">&quot;https://fastly.jsdelivr.net/gh/naiba/nezha/&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;option\\.value&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> -F <span class="token string">&quot;&#39;&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/naiba\\/nezha@/v/g&#39;</span><span class="token variable">)</span></span>
		fi
		if [ ! -n &quot;<span class="token variable">$version</span>&quot; ]; then
			version=<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -m <span class="token number">10</span> -sL <span class="token string">&quot;https://gcore.jsdelivr.net/gh/naiba/nezha/&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;option\\.value&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> -F <span class="token string">&quot;&#39;&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/naiba\\/nezha@/v/g&#39;</span><span class="token variable">)</span></span>
		fi
		if [ ! -n &quot;<span class="token variable">$version</span>&quot; ]; then
			echo -e &quot;\u83B7\u53D6\u7248\u672C\u53F7\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u672C\u673A\u80FD\u5426\u94FE\u63A5 https://api.github.com/repos/naiba/nezha/releases/latest&quot;
			return 0
		else
			echo -e &quot;\u5F53\u524D\u6700\u65B0\u7248\u672C\u4E3A: <span class="token variable">\${version}</span>&quot;
		fi
		wget -t 2 -T 10 -O nezha-agent_linux_<span class="token variable">\${os_arch}</span>.zip https://<span class="token variable">\${GITHUB_URL}</span>/naiba/nezha/releases/download/<span class="token variable">\${version}</span>/nezha-agent_linux_<span class="token variable">\${os_arch}</span>.zip &gt;/dev/null 2&gt;&amp;1
		if [[ <span class="token variable">$?</span> != 0 ]]; then
			echo -e &quot;Release \u4E0B\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u672C\u673A\u80FD\u5426\u8FDE\u63A5 <span class="token variable">\${GITHUB_URL}</span><span class="token variable">\${plain}</span>&quot;
			return 0
		fi
		mkdir -p <span class="token variable">$NZ_AGENT_PATH</span>
		chmod 755 -R <span class="token variable">$NZ_AGENT_PATH</span>
		unzip -qo nezha-agent_linux_<span class="token variable">\${os_arch}</span>.zip &amp;&amp; mv nezha-agent <span class="token variable">$NZ_AGENT_PATH</span> &amp;&amp; rm -rf nezha-agent_linux_<span class="token variable">\${os_arch}</span>.zip README.md
	fi
	if [ ! -x &quot;<span class="token variable">\${NZ_AGENT_PATH}</span>/nezha-agent&quot; ]; then
		chmod +x <span class="token variable">\${NZ_AGENT_PATH}</span>/nezha-agent
	fi
}
start_pre() {
	if [ &quot;<span class="token variable">\${RC_CMD}</span>&quot; != &quot;restart&quot; ]; then
		checkconfig || return <span class="token variable">$?</span>
	fi
}
EOF</span>
</code></pre></div><ul><li><p>\u589E\u52A0\u8FD0\u884C\u6743\u9650</p><div class="language-shell"><pre><code><span class="token function">chmod</span> +x /etc/init.d/nezha-agent
</code></pre></div></li><li><p>\u8FD0\u884C nezha-agent</p><div class="language-shell"><pre><code>rc-service nezha-agent-hy start
</code></pre></div></li><li><p>\u6DFB\u52A0\u5F00\u673A\u81EA\u542F\u52A8</p><div class="language-shell"><pre><code>rc-update <span class="token function">add</span> nezha-agent
</code></pre></div></li></ul><h3 id="\u5728-windows-\u4E2D\u5B89\u88C5agent" tabindex="-1">\u5728 Windows \u4E2D\u5B89\u88C5Agent <a class="header-anchor" href="#\u5728-windows-\u4E2D\u5B89\u88C5agent" aria-hidden="true">#</a></h3><ul><li>\u8BF7\u53C2\u8003\u793E\u533A\u6587\u7AE0\uFF1A<br><a href="https://nyko.me/2020/12/13/nezha-windows-client.html" target="_blank" rel="noopener noreferrer">\u54EA\u5412\u63A2\u9488 - Windows \u5BA2\u6237\u7AEF\u5B89\u88C5</a><br><br></li></ul><h3 id="\u5728-macos-\u4E2D\u5B89\u88C5agent" tabindex="-1">\u5728 MacOS \u4E2D\u5B89\u88C5Agent <a class="header-anchor" href="#\u5728-macos-\u4E2D\u5B89\u88C5agent" aria-hidden="true">#</a></h3><p><em><strong>\u672C\u8282\u5185\u5BB9\u6539\u7F16\u81EA<a href="https://blog.mitsea.com/e796f93db38d49e4b18df234c6ee75f5" target="_blank" rel="noopener noreferrer">Mitsea Blog</a>\uFF0C\u6539\u7F16\u5DF2\u83B7\u5F97\u539F\u4F5C\u8005\u6388\u6743</strong></em><br><br></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u5B89\u88C5\u8FC7\u7A0B\u4E2D\u5982\u63D0\u793A\u201CmacOS\u65E0\u6CD5\u9A8C\u8BC1\u6B64app\u201C\uFF0C\u8BF7\u524D\u5F80\u7CFB\u7EDF\u8BBE\u7F6E\u624B\u52A8\u5141\u8BB8\u7A0B\u5E8F\u8FD0\u884C</p></div><ul><li>\u9996\u5148\u5728\u7BA1\u7406\u9762\u677F\u4E2D\u6DFB\u52A0\u4E00\u53F0\u670D\u52A1\u5668</li><li>\u524D\u5F80 <a href="https://github.com/naiba/nezha/releases" target="_blank" rel="noopener noreferrer">Release</a> \u9875\u4E0B\u8F7D Agent \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u6839\u636E CPU \u67B6\u6784\u9009\u62E9\u4E0B\u8F7D darwin amd64 \u8FD8\u662F arm64 \u7684 Agent<br> \u5982 Intel CPU \u4E0B\u8F7D amd64\uFF0CApple Silicon \u4E0B\u8F7D arm64 \u7248\u672C\u3002\u4E0B\u8F7D\u5B8C\u6210\u540E\u89E3\u538B Agent \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u5982\u89E3\u538B\u5230\u4E0B\u8F7D\u6587\u4EF6\u5939</li><li>\u65B0\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>nezha_agent.plist</code> \u7684\u6587\u4EF6\u5E76\u4FDD\u5B58\uFF0C\u4FEE\u6539\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</li></ul><div class="language-xml"><pre><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">plist</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//Apple//DTD PLIST 1.0//EN&quot;</span> <span class="token string">&quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plist</span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>false</span><span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>Label<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>nezha_agent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>Program<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>\u5728\u8FD9\u91CC\u4FEE\u6539 Agent \u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u7684\u8DEF\u5F84\uFF0C\u5982\uFF1A/Users/123/Downloads/nezha-agent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>ProgramArguments<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>array</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>\u5728\u8FD9\u91CC\u4FEE\u6539 Agent \u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u7684\u8DEF\u5F84\uFF0C\u540C\u4E0A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>--password<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>\u901A\u4FE1\u5BC6\u94A5\uFF0C\u5982\uFF1A529664783eeb23cc25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>--server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>\u901A\u4FE1\u7F51\u5740\u548CRPC\u7AEF\u53E3\uFF0C\u5982:data.example.com:5555<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>array</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>RunAtLoad<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>true</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plist</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>\u5728 Terminal \u4E2D\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u52A0\u8F7D plist \u6587\u4EF6\u5230 launchd \u91CC\uFF0C<strong>\u6CE8\u610F\u66FF\u6362\u6587\u4EF6\u8DEF\u5F84</strong></li></ul><div class="language-shell"><pre><code>launchctl load /Users/123/Desktop/nezha_agent.plist
</code></pre></div><ul><li>\u542F\u52A8\u8FDB\u7A0B</li></ul><div class="language-shell"><pre><code>launchctl start nezha_agent
</code></pre></div><ul><li>\u68C0\u67E5\u8FDB\u7A0B\u662F\u5426\u8FD0\u884C</li></ul><div class="language-shell"><pre><code>launchctl list <span class="token operator">|</span> <span class="token function">grep</span> nezha_agent
</code></pre></div><ul><li>\u505C\u6B62\u8FDB\u7A0B\u5E76\u79FB\u9664</li></ul><div class="language-shell"><pre><code>launchctl stop nezha_agent
</code></pre></div><div class="language-shell"><pre><code>launchctl remove nezha_agent
</code></pre></div><br><h3 id="\u5728-openwrt-\u4E2D\u5B89\u88C5agent" tabindex="-1">\u5728 OpenWRT \u4E2D\u5B89\u88C5Agent <a class="header-anchor" href="#\u5728-openwrt-\u4E2D\u5B89\u88C5agent" aria-hidden="true">#</a></h3><p><strong>\u5982\u4F55\u4F7F \u65E7\u7248OpenWRT/LEDE \u81EA\u542F\u52A8</strong></p><ul><li>\u8BF7\u53C2\u8003\u9879\u76EE\uFF1A<br><a href="https://github.com/Erope/openwrt_nezha" target="_blank" rel="noopener noreferrer">\u54EA\u5412\u76D1\u63A7 For OpenWRT</a><br><br></li></ul><p><strong>\u5982\u4F55\u4F7F \u65B0\u7248OpenWRT \u81EA\u542F\u52A8\uFF1F\u6765\u81EA @\u827E\u65AF\u5FB7\u65AF</strong></p><ul><li>\u9996\u5148\u5728 release \u4E0B\u8F7D\u5BF9\u5E94\u7684\u4E8C\u8FDB\u5236\u89E3\u538B zip \u5305\u540E\u653E\u7F6E\u5230 <code>/root</code></li><li>\u8FD0\u884C <code>chmod +x /root/nezha-agent</code> \u8D4B\u4E88\u6267\u884C\u6743\u9650\uFF0C\u7136\u540E\u521B\u5EFA <code>/etc/init.d/nezha-service</code>\uFF1A</li></ul><div class="language-shell"><pre><code><span class="token shebang important">#!/bin/sh /etc/rc.common</span>

<span class="token assign-left variable">START</span><span class="token operator">=</span><span class="token number">99</span>
<span class="token assign-left variable">USE_PROCD</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token function-name function">start_service</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 procd_open_instance
 procd_set_param <span class="token builtin class-name">command</span> /root/nezha-agent -s \u9762\u677F\u901A\u4FE1\u5730\u5740:\u7AEF\u53E3 -p \u79D8\u94A5 -d
 procd_set_param respawn
 procd_close_instance
<span class="token punctuation">}</span>

<span class="token function-name function">stop_service</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">killall</span> nezha-agent
<span class="token punctuation">}</span>

<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 stop
 <span class="token function">sleep</span> <span class="token number">2</span>
 start
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u8FD0\u884C <code>chmod +x /etc/init.d/nezha-service</code> \u8D4B\u4E88\u6267\u884C\u6743\u9650</li><li>\u542F\u52A8\u670D\u52A1\uFF1A <code>/etc/init.d/nezha-service enable &amp;&amp; /etc/init.d/nezha-service start</code><br><br><br><br></li></ul><h2 id="\u81EA\u5B9A\u4E49agent\u76D1\u63A7\u9879\u76EE" tabindex="-1">\u81EA\u5B9A\u4E49Agent\u76D1\u63A7\u9879\u76EE <a class="header-anchor" href="#\u81EA\u5B9A\u4E49agent\u76D1\u63A7\u9879\u76EE" aria-hidden="true">#</a></h2><h4 id="\u81EA\u5B9A\u4E49\u76D1\u63A7\u7684\u7F51\u5361\u548C\u786C\u76D8\u5206\u533A" tabindex="-1">\u81EA\u5B9A\u4E49\u76D1\u63A7\u7684\u7F51\u5361\u548C\u786C\u76D8\u5206\u533A <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u76D1\u63A7\u7684\u7F51\u5361\u548C\u786C\u76D8\u5206\u533A" aria-hidden="true">#</a></h4><ul><li>\u6267\u884C <code>/opt/nezha/agent/nezha-agent --edit-agent-config</code> \u6765\u9009\u62E9\u81EA\u5B9A\u4E49\u7684\u7F51\u5361\u548C\u5206\u533A\uFF0C\u7136\u540E\u91CD\u542F Agent \u5373\u53EF\u751F\u6548</li></ul><h4 id="\u5176\u4ED6\u8FD0\u884C\u53C2\u6570" tabindex="-1">\u5176\u4ED6\u8FD0\u884C\u53C2\u6570 <a class="header-anchor" href="#\u5176\u4ED6\u8FD0\u884C\u53C2\u6570" aria-hidden="true">#</a></h4><p>\u901A\u8FC7\u6267\u884C <code>./nezha-agent --help</code> \u67E5\u770B\u652F\u6301\u7684\u53C2\u6570\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u4E86\u4E00\u952E\u811A\u672C\u5B89\u88C5Agent\uFF0C\u53EF\u4EE5\u7F16\u8F91 <code>/etc/systemd/system/nezha-agent.service</code>\uFF0C\u5728 <code>ExecStart=</code> \u8FD9\u4E00\u884C\u7684\u672B\u5C3E\u52A0\u4E0A\u4EE5\u4E0B\u53C2\u6570</p><ul><li><code>--report-delay</code> \u63A7\u5236\u7CFB\u7EDF\u4FE1\u606F\u4E0A\u62A5\u7684\u95F4\u9694\uFF0C\u9ED8\u8BA4\u4E3A 1 \u79D2\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A 3 \u6765\u8FDB\u4E00\u6B65\u964D\u4F4E agent \u7AEF\u7CFB\u7EDF\u8D44\u6E90\u5360\u7528\uFF08\u914D\u7F6E\u533A\u95F4 1-4\uFF09</li><li><code>--skip-conn</code> \u4E0D\u76D1\u63A7\u8FDE\u63A5\u6570\uFF0C\u63A8\u8350 \u673A\u573A/\u8FDE\u63A5\u5BC6\u96C6\u578B\u670D\u52A1\u5668\u6216CPU\u5360\u7528\u8F83\u9AD8\u7684\u670D\u52A1\u5668\u8BBE\u7F6E</li><li><code>--skip-procs</code> \u4E0D\u76D1\u63A7\u8FDB\u7A0B\u6570\uFF0C\u4E5F\u53EF\u4EE5\u964D\u4F4E agent \u5360\u7528</li><li><code>--disable-auto-update</code> \u7981\u6B62 <strong>\u81EA\u52A8\u66F4\u65B0</strong> Agent\uFF08\u5B89\u5168\u7279\u6027\uFF09</li><li><code>--disable-force-update</code> \u7981\u6B62 <strong>\u5F3A\u5236\u66F4\u65B0</strong> Agent\uFF08\u5B89\u5168\u7279\u6027\uFF09</li><li><code>--disable-command-execute</code> \u7981\u6B62\u5728 Agent \u4E0A\u6267\u884C\u5B9A\u65F6\u4EFB\u52A1\u3001\u6253\u5F00\u5728\u7EBF\u7EC8\u7AEF\uFF08\u5B89\u5168\u7279\u6027\uFF09</li><li><code>--tls</code> \u542F\u7528 SSL/TLS \u52A0\u5BC6\uFF08\u4F7F\u7528 nginx \u53CD\u5411\u4EE3\u7406 Agent \u7684 grpc \u8FDE\u63A5\uFF0C\u5E76\u4E14 nginx \u5F00\u542F SSL/TLS \u65F6\uFF0C\u9700\u8981\u542F\u7528\u8BE5\u9879\u914D\u7F6E\uFF09</li></ul><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-hidden="true">#</a></h2><h3 id="agent-\u6709-docker-\u955C\u50CF\u5417\uFF1F" tabindex="-1">Agent \u6709 Docker \u955C\u50CF\u5417\uFF1F <a class="header-anchor" href="#agent-\u6709-docker-\u955C\u50CF\u5417\uFF1F" aria-hidden="true">#</a></h3><p><strong>Agent \u76EE\u524D\u6CA1\u6709\u63A8\u51FA Docker \u955C\u50CF\u3002</strong><br> Agent \u7684\u8BBE\u8BA1\u601D\u8DEF\u548C Dashboard \u76F8\u53CD\uFF0CDashboard \u8981\u5C3D\u53EF\u80FD\u4E0D\u5F71\u54CD\u5BBF\u4E3B\u673A\u5DE5\u4F5C\uFF0C\u4F46 Agent \u5219\u9700\u8981\u5728\u5BBF\u4E3B\u673A\u4E2D\u6267\u884C\u76D1\u63A7\u670D\u52A1\u548C\u8FD0\u884C\u547D\u4EE4\u3002<br> \u5C06 Agent \u653E\u5165\u5BB9\u5668\u4E2D\u786E\u5B9E\u53EF\u4EE5\u7EE7\u7EED\u6267\u884C\u76D1\u63A7\u4EFB\u52A1\uFF0C\u4F46 WebShell \u7B49\u529F\u80FD\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C\uFF0C\u56E0\u6B64\u4E0D\u63D0\u4F9B Docker \u955C\u50CF\u3002</p>`,53),o=[p];function l(c,i,r,u,g,k){return s(),a("div",null,o)}var b=n(e,[["render",l]]);export{h as __pageData,b as default};
